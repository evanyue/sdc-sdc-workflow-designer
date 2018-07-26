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
package org.onap.sdc.workflowdesigner.externalservice.sdc.entity;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.google.gson.annotations.SerializedName;

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
    String name = "name";
    String type = "type";
    String defaultValue = "defaultValue";
    String value = "value";
    
    Parameter p = new Parameter();
    p.setDefault(defaultValue);
    p.setName(name);
    p.setType(type);
    p.setValue(value);
    
    assertEquals(name, p.getName());
    assertEquals(type, p.getType());
    assertEquals(defaultValue, p.getDefault());
    assertEquals(value, p.getValue());

  }

}