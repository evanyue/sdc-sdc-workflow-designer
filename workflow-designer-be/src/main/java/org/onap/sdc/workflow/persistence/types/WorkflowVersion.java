package org.onap.sdc.workflow.persistence.types;

import java.util.Date;
import lombok.Data;


@Data
public class WorkflowVersion {

    private String id;
    private String name;
    private String description;
    private String baseId;
    private Date creationTime;
    private Date modificationTime;
    private WorkflowVersionStatus status;


    public WorkflowVersion(String id) {
        this.id = id;
        this.status = WorkflowVersionStatus.DRAFT;
    }

    public WorkflowVersion() {
    }
}
