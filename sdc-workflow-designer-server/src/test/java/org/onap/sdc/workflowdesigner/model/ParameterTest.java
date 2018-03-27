/**
 * Copyright (c) 2018 ZTE Corporation.
 * All rights reserved. This program and the accompanying materials
 * are made available under the Apache License, Version 2.0
 * and the Eclipse Public License v1.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     ZTE - initial API and implementation and/or initial documentation
 */
package org.onap.sdc.workflowdesigner.model;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 *
 */
public class ParameterTest {

  /**
   * @throws java.lang.Exception
   */
  @Before
  public void setUp() throws Exception {}

  /**
   * @throws java.lang.Exception
   */
  @After
  public void tearDown() throws Exception {}

  @Test
  public void test() {
    String description = "description";
    String name = "name";
    String position = "position";
    boolean required = false;
    String type = "type";
    Object value = "value";
    String valueSource = "valueSource";
    
    Parameter p = new Parameter();
    p.setDescription(description);
    p.setName(name);
    p.setPosition(position);
    p.setRequired(required);
    p.setType(type);
    p.setValueSource(valueSource);
    p.setValue(value);
    
    assertEquals(description, p.getDescription());
    assertEquals(name, p.getName());
    assertEquals(position, p.getPosition());
    assertEquals(required, p.isRequired());
    assertEquals(type, p.getType());
    assertEquals(valueSource, p.getValueSource());
    assertEquals(value, p.getValue());
    
  }

}
