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

package org.onap.sdc.workflow.api.types.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This class is a simple data object for the Artifact-Deliveries API.
 * It will be used to build a HTTP request to be sent to SDC external API.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArtifactDeliveriesRequestDto {

    /**
     * The HTTP method (PUT, POST etc) that will be executed.
     */
    private String method;

    /**
     * The server to which the request will be sent. Correct format is &lt;IP&gt;:&lt;PORT&gt;.
     */
    private String endpoint;
}
