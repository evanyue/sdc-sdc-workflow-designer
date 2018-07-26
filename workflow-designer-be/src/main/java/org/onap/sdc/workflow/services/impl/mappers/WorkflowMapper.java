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

package org.onap.sdc.workflow.services.impl.mappers;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.onap.sdc.workflow.persistence.types.Workflow;
import org.onap.sdc.workflow.services.impl.WorkflowManagerImpl;
import org.openecomp.sdc.versioning.types.Item;

@Mapper(componentModel = "spring", imports = WorkflowManagerImpl.class, uses = VersionStateMapper.class)
public interface WorkflowMapper {

    @Mapping(source = "versionStatusCounters", target = "versionStates")
    Workflow itemToWorkflow(Item item);

    @InheritInverseConfiguration
    @Mappings({@Mapping(expression = "java(WorkflowManagerImpl.WORKFLOW_TYPE)", target = "type"),
            @Mapping(target = "versionStatusCounters", ignore = true)})
    Item workflowToItem(Workflow workflow);

}