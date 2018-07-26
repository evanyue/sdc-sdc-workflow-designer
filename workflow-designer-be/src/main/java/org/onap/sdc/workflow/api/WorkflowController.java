/*
 * Copyright © 2018 European Support Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.onap.sdc.workflow.api;

import static org.onap.sdc.workflow.RestUtils.*;
import static org.onap.sdc.workflow.api.RestConstants.SIZE_DEFAULT;
import static org.onap.sdc.workflow.api.RestConstants.SORT_FIELD_NAME;
import static org.onap.sdc.workflow.api.RestConstants.SORT_PARAM;
import static org.onap.sdc.workflow.api.RestConstants.USER_ID_HEADER_PARAM;

import com.google.common.collect.ImmutableSet;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.Arrays;
import java.util.Set;
import org.onap.sdc.workflow.api.types.CollectionWrapper;
import org.onap.sdc.workflow.persistence.types.Workflow;
import org.onap.sdc.workflow.services.WorkflowManager;
import org.onap.sdc.workflow.services.WorkflowVersionManager;
import org.onap.sdc.workflow.services.exceptions.InvalidPaginationParameterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/workflows")
@Api("Workflows")
@RestController("workflowController")
public class WorkflowController {

    private final WorkflowManager workflowManager;
    private final WorkflowVersionManager workflowVersionManager;

    @Autowired
    public WorkflowController(@Qualifier("workflowManager") WorkflowManager workflowManager,
            @Qualifier("workflowVersionManager") WorkflowVersionManager workflowVersionManager) {
        this.workflowManager = workflowManager;
        this.workflowVersionManager = workflowVersionManager;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation("List workflows")
    public CollectionWrapper<Workflow> list(
            @ApiParam(value = "Filter by version state", allowableValues = "DRAFT,CERTIFIED")
            @RequestParam(value = "versionState", required = false) String versionStateFilter,
            @PageableDefault(size = SIZE_DEFAULT)
            @SortDefault.SortDefaults({@SortDefault(sort = SORT_FIELD_NAME, direction = Sort.Direction.ASC)})
                    Pageable pageable, @RequestHeader(USER_ID_HEADER_PARAM) String user) {
        PageRequest pageRequest = createPageRequest(pageable);
        return new CollectionWrapper<>(pageRequest.getPageSize(), pageRequest.getPageNumber(),
                workflowManager.list(mapVersionStateFilter(versionStateFilter), pageRequest));
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation("Create workflow")
    public ResponseEntity<Workflow> create(@Validated @RequestBody Workflow workflow,
            @RequestHeader(USER_ID_HEADER_PARAM) String user) {
        return new ResponseEntity<>(workflowManager.create(workflow), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{workflowId}")
    @ApiOperation("Get workflow")
    public Workflow get(@PathVariable("workflowId") String workflowId,
            @ApiParam(value = "Expand workflow data", allowableValues = "versions")
            @RequestParam(value = "expand", required = false) String expand,
            @RequestHeader(USER_ID_HEADER_PARAM) String user) {
        Workflow workflow = new Workflow();
        workflow.setId(workflowId);
        Workflow retrievedWorkflow = workflowManager.get(workflow);
        if("versions".equals(expand)){
            retrievedWorkflow.setVersions(workflowVersionManager.list(workflowId,null));
        }
        return retrievedWorkflow;
    }

    @PutMapping(path = "/{workflowId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation("Update workflow")
    public Workflow update(@RequestBody Workflow workflow, @PathVariable("workflowId") String workflowId,
            @RequestHeader(USER_ID_HEADER_PARAM) String user) {
        workflow.setId(workflowId);
        workflowManager.update(workflow);
        return workflow;
    }


    private PageRequest createPageRequest(Pageable pageable) {
        Set<String> validSortFields = ImmutableSet.of(SORT_FIELD_NAME);
        Sort sort = pageable.getSort();
        for (Sort.Order order : sort) {
            String sortFieldName = order.getProperty();
            if (!sortFieldName.equalsIgnoreCase(SORT_FIELD_NAME)) {
                throw new InvalidPaginationParameterException(SORT_PARAM, sortFieldName,
                        "is not supported. Supported values are: " + Arrays.toString(validSortFields.toArray()));
            }
        }
        return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), sort);
    }
}