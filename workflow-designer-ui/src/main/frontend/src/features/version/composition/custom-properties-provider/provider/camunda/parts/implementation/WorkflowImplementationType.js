var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory'),
    cmdHelper = require('bpmn-js-properties-panel/lib/helper/CmdHelper'),
    extensionElementsHelper = require('bpmn-js-properties-panel/lib/helper/ExtensionElementsHelper'),
    elementHelper = require('bpmn-js-properties-panel/lib/helper/ElementHelper');

var assign = require('lodash.assign');
var map = require('lodash.map');
import { implementationType } from './implementationConstants';

var DEFAULT_DELEGATE_PROPS = ['class', 'expression', 'delegateExpression'];

var DELEGATE_PROPS = {
    'camunda:class': undefined,
    'camunda:expression': undefined,
    'camunda:delegateExpression': undefined,
    'camunda:resultVariable': undefined
};

var DMN_CAPABLE_PROPS = {
    'camunda:decisionRef': undefined,
    'camunda:decisionRefBinding': 'latest',
    'camunda:decisionRefVersion': undefined,
    'camunda:mapDecisionResult': 'resultList',
    'camunda:decisionRefTenantId': undefined
};

var EXTERNAL_CAPABLE_PROPS = {
    'camunda:type': undefined,
    'camunda:topic': undefined
};

const ACTIVITY_PROPS = {};

ACTIVITY_PROPS[implementationType] = undefined;

module.exports = function(element, bpmnFactory, options, translate) {
    var DEFAULT_OPTIONS = [
        { value: 'class', name: translate('Java Class') },
        { value: 'expression', name: translate('Expression') },
        { value: 'delegateExpression', name: translate('Delegate Expression') }
    ];

    var DMN_OPTION = [{ value: 'dmn', name: translate('DMN') }];

    var EXTERNAL_OPTION = [{ value: 'external', name: translate('External') }];

    var CONNECTOR_OPTION = [
        { value: 'connector', name: translate('Connector') }
    ];

    var SCRIPT_OPTION = [{ value: 'script', name: translate('Script') }];

    var ACTIVITY_OPTION = [
        { value: 'workflowActivity', name: translate('Activity') }
    ];

    var getType = options.getImplementationType,
        getBusinessObject = options.getBusinessObject;

    var hasDmnSupport = options.hasDmnSupport,
        hasExternalSupport = options.hasExternalSupport,
        hasServiceTaskLikeSupport = options.hasServiceTaskLikeSupport,
        hasScriptSupport = options.hasScriptSupport;

    var entries = [];

    var selectOptions = DEFAULT_OPTIONS.concat([]);

    if (hasDmnSupport) {
        selectOptions = selectOptions.concat(DMN_OPTION);
    }

    if (hasExternalSupport) {
        selectOptions = selectOptions.concat(EXTERNAL_OPTION);
    }

    if (hasServiceTaskLikeSupport) {
        selectOptions = selectOptions.concat(CONNECTOR_OPTION);
    }

    if (hasScriptSupport) {
        selectOptions = selectOptions.concat(SCRIPT_OPTION);
    }

    selectOptions = selectOptions.concat(ACTIVITY_OPTION);

    selectOptions.push({ value: '' });

    entries.push(
        entryFactory.selectBox({
            id: 'implementation',
            label: translate('Implementation'),
            selectOptions: selectOptions,
            modelProperty: 'implType',

            get: function(element) {
                return {
                    implType: getType(element) || ''
                };
            },

            set: function(element, values) {
                var bo = getBusinessObject(element);
                var oldType = getType(element);
                var newType = values.implType;

                var props = assign({}, DELEGATE_PROPS);

                if (DEFAULT_DELEGATE_PROPS.indexOf(newType) !== -1) {
                    var newValue = '';
                    if (DEFAULT_DELEGATE_PROPS.indexOf(oldType) !== -1) {
                        newValue = bo.get('camunda:' + oldType);
                    }

                    props['camunda:' + newType] = newValue;
                }

                if (hasDmnSupport) {
                    props = assign(props, DMN_CAPABLE_PROPS);
                    if (newType === 'dmn') {
                        props['camunda:decisionRef'] = '';
                    }
                }

                if (hasExternalSupport) {
                    props = assign(props, EXTERNAL_CAPABLE_PROPS);
                    if (newType === 'external') {
                        props['camunda:type'] = 'external';
                        props['camunda:topic'] = '';
                    }
                }

                if (hasScriptSupport) {
                    props['camunda:script'] = undefined;

                    if (newType === 'script') {
                        props['camunda:script'] = elementHelper.createElement(
                            'camunda:Script',
                            {},
                            bo,
                            bpmnFactory
                        );
                    }
                }

                props = assign(props, ACTIVITY_PROPS);
                props[implementationType.ACTIVITY] = undefined;
                var commands = [];
                if (newType === 'workflowActivity') {
                    props[implementationType.ACTIVITY] = '';
                    props[implementationType.ACTIVITY_RESOURCE] = '';
                } else {
                    var inputsOutputs = extensionElementsHelper.getExtensionElements(
                        bo,
                        'camunda:InputOutput'
                    );
                    commands.push(
                        map(inputsOutputs, function(inputOutput) {
                            return extensionElementsHelper.removeEntry(
                                bo,
                                element,
                                inputOutput
                            );
                        })
                    );
                }

                commands.push(
                    cmdHelper.updateBusinessObject(element, bo, props)
                );

                if (hasServiceTaskLikeSupport) {
                    var connectors = extensionElementsHelper.getExtensionElements(
                        bo,
                        'camunda:Connector'
                    );
                    commands.push(
                        map(connectors, function(connector) {
                            return extensionElementsHelper.removeEntry(
                                bo,
                                element,
                                connector
                            );
                        })
                    );

                    if (newType === 'connector') {
                        var extensionElements = bo.get('extensionElements');
                        if (!extensionElements) {
                            extensionElements = elementHelper.createElement(
                                'bpmn:ExtensionElements',
                                { values: [] },
                                bo,
                                bpmnFactory
                            );
                            commands.push(
                                cmdHelper.updateBusinessObject(element, bo, {
                                    extensionElements: extensionElements
                                })
                            );
                        }
                        var connector = elementHelper.createElement(
                            'camunda:Connector',
                            {},
                            extensionElements,
                            bpmnFactory
                        );
                        commands.push(
                            cmdHelper.addAndRemoveElementsFromList(
                                element,
                                extensionElements,
                                'values',
                                'extensionElements',
                                [connector],
                                []
                            )
                        );
                    }
                }

                return commands;
            }
        })
    );

    return entries;
};
