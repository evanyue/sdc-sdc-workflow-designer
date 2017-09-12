/**
 * Copyright (c) 2017 ZTE Corporation.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and the Apache License 2.0 which both accompany this distribution,
 * and are available at http://www.eclipse.org/legal/epl-v10.html
 * and http://www.apache.org/licenses/LICENSE-2.0
 *
 * Contributors:
 *     ZTE - initial API and implementation and/or initial documentation
 */

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
/**
 * InMemeoryDataService
 * Mock backend data
 */
export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const swagger = {"swagger":"2.0","info":{"version":"1.0.0","title":"MicroService Bus rest API"},"basePath":"/api/microservices/v1","tags":[{"name":"metrics"},{"name":"iuiRoute"},{"name":"ServiceAccess"},{"name":"ApiRoute"},{"name":"MSB-Service Resource"},{"name":"CustomRoute"}],"paths":{"/apiRoute":{"get":{"tags":["ApiRoute"],"summary":"get all ApiRoute ","description":"","operationId":"getApiRoutes","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/ApiRouteInfo"}}},"500":{"description":"get ApiRouteInfo List  fail","schema":{"type":"string"}}}},"post":{"tags":["ApiRoute"],"summary":"add one ApiRoute ","description":"","operationId":"addApiRoute","produces":["application/json"],"parameters":[{"in":"body","name":"body","description":"ApiRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/ApiRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiRouteInfo"}},"400":{"description":"Unprocessable ApiRouteInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"add ApiRouteInfo fail","schema":{"type":"string"}},"415":{"description":"Unprocessable ApiRouteInfo Entity ","schema":{"type":"string"}}}}},"/apiRoute/apiDocs":{"get":{"tags":["ApiRoute"],"summary":"get all Local apiDoc ","description":"","operationId":"getApiDocs","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"type":"string"}}},"500":{"description":"get apiDoc List  fail","schema":{"type":"string"}}}}},"/apiRoute/apiGatewayPort":{"get":{"tags":["ApiRoute"],"summary":"get apiGateway Port ","description":"","operationId":"getApiGatewayPort","produces":["text/plain"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"string"}},"500":{"description":"get apiGateway Port  fail","schema":{"type":"string"}}}}},"/apiRoute/discoverInfo":{"get":{"tags":["ApiRoute"],"summary":"get discover Info ","description":"","operationId":"getServiceDiscoverInfo","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/DiscoverInfo"}},"500":{"description":"get discover Info fail","schema":{"type":"string"}}}}},"/apiRoute/export":{"get":{"tags":["ApiRoute"],"summary":"export all route service Info by json-file","description":"","operationId":"exportService","produces":["text/plain"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"string"}},"500":{"description":"export fail","schema":{"type":"string"}},"406":{"description":" not Acceptable client-side","schema":{"type":"string"}}}}},"/apiRoute/{serviceName}/version/{version}":{"get":{"tags":["ApiRoute"],"summary":"get one ApiRoute ","description":"","operationId":"getApiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"ApiRoute serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"ApiRoute version,if the version is empty, please enter \"null\"","required":true,"type":"string"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiRouteInfo"}},"500":{"description":"get ApiRouteInfo fail","schema":{"type":"string"}},"404":{"description":"ApiRouteInfo not found","schema":{"type":"string"}},"415":{"description":"Unprocessable ApiRouteInfo Entity ","schema":{"type":"string"}}}},"put":{"tags":["ApiRoute"],"summary":"update one ApiRoute by serviceName and version","description":"","operationId":"updateApiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"ApiRoute serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"ApiRoute version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"in":"body","name":"body","description":"ApiRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/ApiRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiRouteInfo"}},"400":{"description":"Unprocessable ApiRouteInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"update ApiRouteInfo fail","schema":{"type":"string"}},"415":{"description":"Unprocessable ApiRouteInfo Entity ","schema":{"type":"string"}}}},"delete":{"tags":["ApiRoute"],"summary":"delete one ApiRoute by serviceName and version","description":"","operationId":"deleteApiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"ApiRoute serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"ApiRoute version,if the version is empty, please enter \"null\"","required":true,"type":"string"}],"responses":{"500":{"description":"delete ApiRouteInfo fail","schema":{"type":"string"}},"204":{"description":"delete ApiRouteInfo succeed "},"404":{"description":"ApiRouteInfo not found","schema":{"type":"string"}}}}},"/apiRoute/{serviceName}/version/{version}/status/{status}":{"put":{"tags":["ApiRoute"],"summary":"update one ApiRoute  status by serviceName and version","description":"","operationId":"updateApiRouteStatus","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"ApiRoute serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"ApiRoute version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"status","in":"path","description":"ApiRoute status,1：abled  0：disabled","required":true,"type":"string"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/ApiRouteInfo"}},"500":{"description":"update status fail","schema":{"type":"string"}},"415":{"description":"Unprocessable ApiRouteInfo Entity ","schema":{"type":"string"}},"404":{"description":"ApiRouteInfo not found","schema":{"type":"string"}}}}},"/customRoute/all":{"get":{"tags":["CustomRoute"],"summary":"get all CustomRoute ","description":"","operationId":"getCustomRoutes","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/CustomRouteInfo"}}},"500":{"description":"get CustomRouteInfo List  fail","schema":{"type":"string"}}}}},"/customRoute/instance":{"get":{"tags":["CustomRoute"],"summary":"get one CustomRoute ","description":"","operationId":"getCustomRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"query","description":"CustomRoute serviceName","required":false,"type":"string"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/CustomRouteInfo"}},"500":{"description":"get CustomRoute fail","schema":{"type":"string"}},"404":{"description":"CustomRoute not found","schema":{"type":"string"}},"415":{"description":"Unprocessable CustomRoute Entity ","schema":{"type":"string"}}}},"post":{"tags":["CustomRoute"],"summary":"add one CustomRoute ","description":"","operationId":"addCustomRoute","produces":["application/json"],"parameters":[{"in":"body","name":"body","description":"CustomRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/CustomRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/CustomRouteInfo"}},"400":{"description":"Unprocessable CustomRouteInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"add CustomRouteInfo fail","schema":{"type":"string"}},"415":{"description":"Unprocessable CustomRouteInfo Entity ","schema":{"type":"string"}}}},"put":{"tags":["CustomRoute"],"summary":"update one CustomRoute by serviceName","description":"","operationId":"updateCustomRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"query","description":"CustomRoute serviceName","required":true,"type":"string"},{"in":"body","name":"body","description":"CustomRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/CustomRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/CustomRouteInfo"}},"400":{"description":"Unprocessable CustomRoute JSON REQUEST","schema":{"type":"string"}},"500":{"description":"update CustomRoute fail","schema":{"type":"string"}},"415":{"description":"Unprocessable CustomRoute Entity ","schema":{"type":"string"}}}},"delete":{"tags":["CustomRoute"],"summary":"delete one CustomRoute by serviceName","description":"","operationId":"deleteCustomRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"query","description":"CustomRoute serviceName","required":true,"type":"string"}],"responses":{"500":{"description":"delete customRoute fail","schema":{"type":"string"}},"204":{"description":"delete customRoute succeed "},"404":{"description":"customRoute not found","schema":{"type":"string"}}}}},"/customRoute/status":{"put":{"tags":["CustomRoute"],"summary":"update one CustomRoute  status by serviceName ","description":"","operationId":"updateCustomRouteStatus","produces":["application/json"],"parameters":[{"name":"serviceName","in":"query","description":"CustomRoute serviceName","required":true,"type":"string"},{"name":"status","in":"query","description":"CustomRoute status,1：abled  0：disabled","required":true,"type":"string"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/CustomRouteInfo"}},"500":{"description":"update status fail","schema":{"type":"string"}},"415":{"description":"Unprocessable customRoute Entity ","schema":{"type":"string"}},"404":{"description":"customRoute not found","schema":{"type":"string"}}}}},"/iuiRoute":{"get":{"tags":["iuiRoute"],"summary":"get all iuiRoute ","description":"","operationId":"getIuiRoutes","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/IuiRouteInfo"}}},"500":{"description":"get iuiRouteInfo List  fail","schema":{"type":"string"}}}},"post":{"tags":["iuiRoute"],"summary":"add one iuiRoute ","description":"","operationId":"addIuiRoute","produces":["application/json"],"parameters":[{"in":"body","name":"body","description":"iuiRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/IuiRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/IuiRouteInfo"}},"400":{"description":"Unprocessable iuiRouteInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"add iuiRouteInfo fail","schema":{"type":"string"}},"415":{"description":"Unprocessable iuiRouteInfo Entity ","schema":{"type":"string"}}}}},"/iuiRoute/{serviceName}":{"get":{"tags":["iuiRoute"],"summary":"get one iuiRoute ","description":"","operationId":"getIuiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"iuiRoute serviceName","required":true,"type":"string"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/IuiRouteInfo"}},"500":{"description":"get IuiRouteInfo fail","schema":{"type":"string"}},"404":{"description":"IuiRouteInfo not found","schema":{"type":"string"}},"415":{"description":"Unprocessable IuiRouteInfo Entity ","schema":{"type":"string"}}}},"put":{"tags":["iuiRoute"],"summary":"update one iuiRoute by serviceName","description":"","operationId":"updateIuiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"iuiRoute serviceName","required":true,"type":"string"},{"in":"body","name":"body","description":"iuiRoute Instance Info","required":true,"schema":{"$ref":"#/definitions/IuiRouteInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/IuiRouteInfo"}},"400":{"description":"Unprocessable IuiRouteInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"update IuiRouteInfo fail","schema":{"type":"string"}},"415":{"description":"Unprocessable IuiRouteInfo Entity ","schema":{"type":"string"}}}},"delete":{"tags":["iuiRoute"],"summary":"delete one iuiRoute by serviceName","description":"","operationId":"deleteIuiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"iuiRoute serviceName","required":true,"type":"string"}],"responses":{"500":{"description":"delete IuiRouteInfo fail","schema":{"type":"string"}},"204":{"description":"delete IuiRouteInfo succeed "},"404":{"description":"IuiRouteInfo not found","schema":{"type":"string"}}}}},"/iuiRoute/{serviceName}/status/{status}":{"put":{"tags":["iuiRoute"],"summary":"update one iuiRoute  status by serviceName ","description":"","operationId":"updateIuiRouteStatus","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"iuiRoute serviceName","required":true,"type":"string"},{"name":"status","in":"path","description":"iuiRoute status,1：abled  0：disabled","required":true,"type":"string"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/IuiRouteInfo"}},"500":{"description":"update IuiRouteInfo status fail","schema":{"type":"string"}},"415":{"description":"Unprocessable IuiRouteInfo Entity ","schema":{"type":"string"}},"404":{"description":"IuiRouteInfo not found","schema":{"type":"string"}}}}},"/metrics":{"get":{"tags":["metrics"],"summary":"get Metrics Info ","description":"","operationId":"getMetricsInfo","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/MetricsInfo"}}}}},"/serviceaccess/{serviceName}":{"get":{"tags":["ServiceAccess"],"summary":"get the msb access address of the service ","description":"","operationId":"getApiRoute","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"serviceName","required":true,"type":"string"},{"name":"type","in":"query","description":"service type","required":false,"type":"string","enum":["api","iui","custom","p2p"]},{"name":"version","in":"query","description":"version","required":false,"type":"string"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/ServiceAccessInfo"}},"500":{"description":"get access address error "}}}},"/services":{"get":{"tags":["MSB-Service Resource"],"summary":"get all microservices ","description":"","operationId":"getMicroService","produces":["application/json"],"parameters":[],"responses":{"200":{"description":"successful operation","schema":{"type":"array","items":{"$ref":"#/definitions/MicroServiceFullInfo"}}},"500":{"description":"get microservice List  fail","schema":{"type":"string"}}}},"post":{"tags":["MSB-Service Resource"],"summary":"add one microservice ","description":"","operationId":"addMicroService","produces":["application/json"],"parameters":[{"in":"body","name":"body","description":"MicroServiceInfo Instance Info","required":true,"schema":{"$ref":"#/definitions/MicroServiceInfo"}},{"name":"createOrUpdate","in":"query","description":"createOrUpdate","required":false,"type":"boolean","default":"true"},{"name":"port","in":"query","description":"port","required":false,"type":"string"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/MicroServiceFullInfo"}},"400":{"description":"Unprocessable MicroServiceInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"add microservice fail","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}}}}},"/services/{serviceName}/version/{version}":{"get":{"tags":["MSB-Service Resource"],"summary":"get one microservice ","description":"","operationId":"getMicroService","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"port","in":"query","description":"port","required":false,"type":"string"}],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/MicroServiceFullInfo"}},"500":{"description":"get microservice fail","schema":{"type":"string"}},"404":{"description":"microservice not found","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}}}},"put":{"tags":["MSB-Service Resource"],"summary":"update one microservice by serviceName and version","description":"","operationId":"updateMicroService","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"in":"body","name":"body","description":"microservice Instance Info","required":true,"schema":{"$ref":"#/definitions/MicroServiceInfo"}}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/MicroServiceFullInfo"}},"400":{"description":"Unprocessable MicroServiceInfo JSON REQUEST","schema":{"type":"string"}},"500":{"description":"update microservice fail","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}}}},"delete":{"tags":["MSB-Service Resource"],"summary":"delete one full microservice by serviceName and version","description":"","operationId":"deleteMicroService","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"port","in":"query","description":"port","required":false,"type":"string"}],"responses":{"500":{"description":"delete microservice fail","schema":{"type":"string"}},"204":{"description":"delete microservice succeed "},"404":{"description":"microservice not found","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}}}}},"/services/{serviceName}/version/{version}/nodes/{ip}/{port}":{"put":{"tags":["MSB-Service Resource"],"summary":"update  single node by serviceName and version and node","description":"","operationId":"updateNode","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"ip","in":"path","description":"ip","required":true,"type":"string"},{"name":"port","in":"path","description":"port","required":true,"type":"string"},{"name":"ttl","in":"query","description":"ttl","required":false,"type":"integer","format":"int32"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/MicroServiceFullInfo"}},"500":{"description":"update node fail","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}},"404":{"description":"microservice not found","schema":{"type":"string"}}}},"delete":{"tags":["MSB-Service Resource"],"summary":"delete single node by serviceName and version and node","description":"","operationId":"deleteNode","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"ip","in":"path","description":"ip","required":true,"type":"string"},{"name":"port","in":"path","description":"port","required":true,"type":"string"}],"responses":{"500":{"description":"delete node fail","schema":{"type":"string"}},"204":{"description":"delete node succeed "},"404":{"description":"node not found","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}}}}},"/services/{serviceName}/version/{version}/status/{status}":{"put":{"tags":["MSB-Service Resource"],"summary":"update  microservice status by serviceName and version","description":"","operationId":"updateServiceStatus","produces":["application/json"],"parameters":[{"name":"serviceName","in":"path","description":"microservice serviceName","required":true,"type":"string"},{"name":"version","in":"path","description":"microservice version,if the version is empty, please enter \"null\"","required":true,"type":"string"},{"name":"status","in":"path","description":"status,1：abled  0：disabled","required":true,"type":"string"}],"responses":{"201":{"description":"successful operation","schema":{"$ref":"#/definitions/MicroServiceFullInfo"}},"500":{"description":"update status fail","schema":{"type":"string"}},"415":{"description":"Unprocessable MicroServiceInfo Entity ","schema":{"type":"string"}},"404":{"description":"microservice not found","schema":{"type":"string"}}}}}},"definitions":{"JVMMetrics":{"type":"object","properties":{"value":{"type":"number","format":"double"}}},"DiscoverInfo":{"type":"object","properties":{"ip":{"type":"string"},"port":{"type":"integer","format":"int32"},"enabled":{"type":"boolean","default":false}}},"IuiRouteInfo":{"type":"object","required":["servers","serviceName","url"],"properties":{"serviceName":{"type":"string"},"url":{"type":"string","example":"/test","description":"Target Service URL,start with /"},"control":{"type":"string","example":"0","description":"[control Range] 0：default   1：readonly  2：hidden ","enum":["0","1","2"]},"status":{"type":"string","example":"1","description":"[status] 1：abled    0：disabled ","enum":["0","1"]},"visualRange":{"type":"string","example":"1","description":"[visual Range]interSystem:0,inSystem:1","enum":["0","1"]},"useOwnUpstream":{"type":"string","example":"0","description":"[LB Policy]non_ip_hash:0,ip_hash:1","enum":["0","1"]},"servers":{"type":"array","items":{"$ref":"#/definitions/RouteServer"}}}},"Node":{"type":"object","required":["ip","port"],"properties":{"ip":{"type":"string"},"port":{"type":"string"},"ttl":{"type":"integer","format":"int32"}}},"RouteServer":{"type":"object","required":["ip","port"],"properties":{"ip":{"type":"string"},"port":{"type":"string"},"weight":{"type":"integer","format":"int32"}}},"MicroServiceInfo":{"type":"object","required":["protocol","serviceName","url"],"properties":{"serviceName":{"type":"string"},"version":{"type":"string","example":"v1"},"url":{"type":"string","example":"/api/serviceName/v1","description":"Target Service URL,start with /"},"protocol":{"type":"string","example":"REST","description":"Service Protocol","enum":["REST","UI","MQ","FTP","SNMP","TCP","UDP"]},"visualRange":{"type":"string","example":"1","description":"[visual Range]interSystem:0,inSystem:1","enum":["0","1"]},"lb_policy":{"type":"string","example":"hash","description":"lb policy","enum":["round-robin","hash","least_conn"]},"namespace":{"type":"string"},"nodes":{"type":"array","uniqueItems":true,"items":{"$ref":"#/definitions/Node"}}}},"HttpMetrics":{"type":"object","properties":{"count":{"type":"integer","format":"int32"},"max":{"type":"number","format":"double"},"mean":{"type":"number","format":"double"},"min":{"type":"number","format":"double"},"p50":{"type":"number","format":"double"},"p75":{"type":"number","format":"double"},"p95":{"type":"number","format":"double"},"p98":{"type":"number","format":"double"},"p99":{"type":"number","format":"double"},"p999":{"type":"number","format":"double"},"stddev":{"type":"number","format":"double"},"m15_rate":{"type":"number","format":"double"},"m1_rate":{"type":"number","format":"double"},"m5_rate":{"type":"number","format":"double"},"mean_rate":{"type":"number","format":"double"},"duration_units":{"type":"string"},"rate_units":{"type":"string"}}},"ApiRouteInfo":{"type":"object","required":["servers","serviceName","url","version"],"properties":{"serviceName":{"type":"string"},"version":{"type":"string","example":"v1"},"url":{"type":"string","example":"/test","description":"Target Service URL,start with /"},"apiJson":{"type":"string"},"apiJsonType":{"type":"string","example":"1","description":"[apiJson Type] 0：local file  1： remote file","enum":["0","1"]},"metricsUrl":{"type":"string"},"control":{"type":"string","example":"0","description":"[control Range] 0：default   1：readonly  2：hidden ","enum":["0","1","2"]},"status":{"type":"string","example":"1","description":"[status] 1：abled    0：disabled ","enum":["0","1"]},"visualRange":{"type":"string","example":"1","description":"[visual Range]interSystem:0,inSystem:1","enum":["0","1"]},"useOwnUpstream":{"type":"string","example":"0","description":"[LB Policy]non_ip_hash:0,ip_hash:1","enum":["0","1"]},"servers":{"type":"array","items":{"$ref":"#/definitions/RouteServer"}}}},"Gauges":{"type":"object","properties":{"jvm.attribute.uptime":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.Eden-Space.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.PS-Eden-Space.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.Perm-Gen.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.PS-Perm-Gen.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.Survivor-Space.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.PS-Survivor-Space.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.Tenured-Gen.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.PS-Old-Gen.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.pools.Code-Cache.usage":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.heap.init":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.non-heap.init":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.heap.used":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.non-heap.used":{"$ref":"#/definitions/JVMMetrics"},"jvm.memory.heap.max":{"$ref":"#/definitions/JVMMetrics"},"jvm.threads.runnable.count":{"$ref":"#/definitions/JVMMetrics"},"jvm.threads.timed_waiting.count":{"$ref":"#/definitions/JVMMetrics"},"jvm.threads.waiting.count":{"$ref":"#/definitions/JVMMetrics"},"jvm.threads.blocked.count":{"$ref":"#/definitions/JVMMetrics"},"jvm.threads.count":{"$ref":"#/definitions/JVMMetrics"}}},"MetricsInfo":{"type":"object","properties":{"gauges":{"$ref":"#/definitions/Gauges"},"timers":{"$ref":"#/definitions/Timers"}}},"ServiceAccessInfo":{"type":"object","properties":{"serviceType":{"type":"string"},"serviceName":{"type":"string"},"version":{"type":"string"},"accessAddr":{"type":"string"}}},"MicroServiceFullInfo":{"type":"object","required":["protocol","serviceName","url"],"properties":{"serviceName":{"type":"string"},"version":{"type":"string","example":"v1"},"url":{"type":"string","example":"/api/serviceName/v1","description":"Target Service URL,start with /"},"protocol":{"type":"string","example":"REST","description":"Service Protocol","enum":["REST","UI","MQ","FTP","SNMP","TCP","UDP"]},"visualRange":{"type":"string","example":"1","description":"[visual Range]interSystem:0,inSystem:1","enum":["0","1"]},"lb_policy":{"type":"string","example":"hash","description":"lb policy","enum":["round-robin","hash","least_conn"]},"namespace":{"type":"string"},"nodes":{"type":"array","uniqueItems":true,"items":{"$ref":"#/definitions/NodeInfo"}},"status":{"type":"string"}}},"NodeInfo":{"type":"object","required":["ip","port"],"properties":{"ip":{"type":"string"},"port":{"type":"string"},"ttl":{"type":"integer","format":"int32"},"nodeId":{"type":"string"},"expiration":{"type":"string","format":"date-time"},"created_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"}}},"CustomRouteInfo":{"type":"object","required":["servers","serviceName","url"],"properties":{"serviceName":{"type":"string"},"url":{"type":"string","example":"/test","description":"Target Service URL,start with /"},"control":{"type":"string","example":"0","description":"[control Range] 0：default   1：readonly  2：hidden ","enum":["0","1","2"]},"status":{"type":"string","example":"1","description":"[status] 1：abled    0：disabled ","enum":["0","1"]},"visualRange":{"type":"string","example":"1","description":"[visual Range]interSystem:0,inSystem:1","enum":["0","1"]},"useOwnUpstream":{"type":"string","example":"0","description":"[LB Policy]non_ip_hash:0,ip_hash:1","enum":["0","1"]},"servers":{"type":"array","items":{"$ref":"#/definitions/RouteServer"}}}},"Timers":{"type":"object","properties":{"org.openo.msb.resources.ApiRouteResource.addApiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.deleteApiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.getApiDocs":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.getApiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.getApiRoutes":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.getServerIP":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.ApiRouteResource.updateApiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.IuiRouteResource.addIuiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.IuiRouteResource.deleteIuiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.IuiRouteResource.getIuiRoute":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.IuiRouteResource.getIuiRoutes":{"$ref":"#/definitions/HttpMetrics"},"org.openo.msb.resources.IuiRouteResource.updateIuiRoute":{"$ref":"#/definitions/HttpMetrics"},"io.dropwizard.jetty.MutableServletContextHandler.get-requests":{"$ref":"#/definitions/HttpMetrics"},"io.dropwizard.jetty.MutableServletContextHandler.post-requests":{"$ref":"#/definitions/HttpMetrics"},"io.dropwizard.jetty.MutableServletContextHandler.put-requests":{"$ref":"#/definitions/HttpMetrics"},"io.dropwizard.jetty.MutableServletContextHandler.delete-requests":{"$ref":"#/definitions/HttpMetrics"},"io.dropwizard.jetty.MutableServletContextHandler.other-requests":{"$ref":"#/definitions/HttpMetrics"}}}}};

        const workflows = [{
            id: 'workflow1',
            name: 'workflow1',
            nodes: [],
            configs: {
                microservices: [{
                    definition: "/s/swagger",
                    name: "test",
                    swaggerJson: JSON.stringify(swagger),
                    version: "v2"
                }]
            }
        }, {
            id: 'workflow2',
            name: 'workflow2',
            nodes: [],
            configs: {
                microservices: []
            }
        },
        {"id":"fjh","name":"fjh","nodes":[{"id":"node0","name":"startEvent","type":"startEvent","position":{"top":43,"left":80.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node0","targetRef":"node2"}],"parameters":[]},{"id":"node1","name":"endEvent","type":"endEvent","position":{"top":273,"left":488,"width":200,"height":100},"sequenceFlows":[]},{"id":"node2","name":"exclusiveGateway","type":"exclusiveGateway","position":{"top":6,"left":178,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node2","targetRef":"node3","condition":"未完成"},{"sourceRef":"node2","targetRef":"node4","condition":"创建完成"}]},{"id":"node3","name":"createVL","type":"restTask","position":{"top":13.5,"left":283.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node3","targetRef":"node11"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node4","name":"restTask","type":"restTask","position":{"top":110,"left":152,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node4","targetRef":"node5"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node5","name":"exclusiveGateway","type":"exclusiveGateway","position":{"top":27.5,"left":401.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node5","targetRef":"node6","condition":"未完成"},{"sourceRef":"node5","targetRef":"node12","condition":"创建完成"}]},{"id":"node6","name":"createVNF","type":"restTask","position":{"top":91,"left":389,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node6","targetRef":"node7"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node7","name":"intermediateCatchEvent","type":"intermediateCatchEvent","position":{"top":190.5,"left":398,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node7","targetRef":"node8"}],"timerEventDefinition":{"type":"timeDuration"}},{"id":"node8","name":"query_vnf nslcm","type":"restTask","position":{"top":240,"left":390,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node8","targetRef":"node9"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node9","name":"exclusiveGateway","type":"exclusiveGateway","position":{"top":316.5,"left":405.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node9","targetRef":"node7","condition":"未完成"},{"sourceRef":"node9","targetRef":"node10","condition":"已完成"}]},{"id":"node10","name":"scriptTask","type":"scriptTask","position":{"top":405.5,"left":404.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node10","targetRef":"node5"}]},{"id":"node11","name":"scriptTask","type":"scriptTask","position":{"top":181.5,"left":110.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node11","targetRef":"node2"}]},{"id":"node12","name":"restTask","type":"restTask","position":{"top":147.5,"left":364.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node12","targetRef":"node13"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node13","name":"exclusiveGateway","type":"exclusiveGateway","position":{"top":214.5,"left":397.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node13","targetRef":"node14","condition":"未结束"},{"sourceRef":"node13","targetRef":"node18","condition":"已结束"}]},{"id":"node14","name":"createSfc","type":"restTask","position":{"top":202,"left":290.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node14","targetRef":"node15"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node15","name":"intermediateCatchEvent","type":"intermediateCatchEvent","position":{"top":128,"left":145.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node15","targetRef":"node16"}],"timerEventDefinition":{"type":"timeDuration"}},{"id":"node16","name":"restTask","type":"restTask","position":{"top":330.5,"left":221,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node16","targetRef":"node17"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node17","name":"exclusiveGateway","type":"exclusiveGateway","position":{"top":402,"left":351.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node17","targetRef":"node15","condition":"未结束"},{"sourceRef":"node17","targetRef":"node19","condition":"已结束"}]},{"id":"node18","name":"restTask","type":"restTask","position":{"top":217.5,"left":194,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node18","targetRef":"node20"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node19","name":"scriptTask","type":"scriptTask","position":{"top":466,"left":389,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node19","targetRef":"node13"}]},{"id":"node20","name":"Assign_all_status","type":"scriptTask","position":{"top":306.5,"left":590.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node20","targetRef":"node21"}]},{"id":"node21","name":"post_do","type":"restTask","position":{"top":390,"left":612.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node21","targetRef":"node22"}],"produces":[],"consumes":[],"parameters":[],"responses":[]},{"id":"node22","name":"jobstatus","type":"restTask","position":{"top":426,"left":682.5,"width":200,"height":100},"sequenceFlows":[{"sourceRef":"node22","targetRef":"node1"}],"produces":[],"consumes":[],"parameters":[],"responses":[]}],"configs":{"microservices":[]}},
        ];
        return { workflows, swagger};
    }
}
