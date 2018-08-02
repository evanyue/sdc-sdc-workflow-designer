import { assign } from 'min-dash';

/**
 * A palette that allows you to create BPMN _and_ custom elements.
 */
export default function PaletteProvider(
    palette,
    create,
    elementFactory,
    spaceTool,
    lassoTool,
    handTool,
    globalConnect,
    translate
) {
    this._create = create;
    this._elementFactory = elementFactory;
    this._spaceTool = spaceTool;
    this._lassoTool = lassoTool;
    this._handTool = handTool;
    this._globalConnect = globalConnect;
    this._translate = translate;

    palette.registerProvider(this);
}

PaletteProvider.$inject = [
    'palette',
    'create',
    'elementFactory',
    'spaceTool',
    'lassoTool',
    'handTool',
    'globalConnect',
    'translate'
];

PaletteProvider.prototype.getPaletteEntries = function() {
    var actions = {},
        create = this._create,
        elementFactory = this._elementFactory,
        spaceTool = this._spaceTool,
        lassoTool = this._lassoTool,
        handTool = this._handTool,
        globalConnect = this._globalConnect,
        translate = this._translate;

    function createAction(type, group, className, title, options) {
        function createListener(event) {
            var shape = elementFactory.createShape(
                assign({ type: type }, options)
            );

            if (options) {
                shape.businessObject.di.isExpanded = options.isExpanded;
            }

            create.start(event, shape);
        }

        var shortType = type.replace(/^bpmn:/, '');

        return {
            group: group,
            className: className,
            title: title || 'Create ' + shortType,
            action: {
                dragstart: createListener,
                click: createListener
            }
        };
    }

    assign(actions, {
        'hand-tool': {
            group: 'tools',
            className: 'bpmn-icon-hand-tool',
            title: translate('Activate the hand tool'),
            action: {
                click: function(event) {
                    handTool.activateHand(event);
                }
            }
        },
        'lasso-tool': {
            group: 'tools',
            className: 'bpmn-icon-lasso-tool',
            title: translate('Activate the lasso tool'),
            action: {
                click: function(event) {
                    lassoTool.activateSelection(event);
                }
            }
        },
        'space-tool': {
            group: 'tools',
            className: 'bpmn-icon-space-tool',
            title: translate('Activate the create/remove space tool'),
            action: {
                click: function(event) {
                    spaceTool.activateSelection(event);
                }
            }
        },
        'global-connect-tool': {
            group: 'tools',
            className: 'bpmn-icon-connection-multi',
            title: translate('Activate the global connect tool'),
            action: {
                click: function(event) {
                    globalConnect.toggle(event);
                }
            }
        },
        'tool-separator': {
            group: 'tools',
            separator: true
        },
        'create.start-event': createAction(
            'bpmn:StartEvent',
            'event',
            'bpmn-icon-start-event-none'
        ),
        'create.intermediate-event': createAction(
            'bpmn:IntermediateThrowEvent',
            'event',
            'bpmn-icon-intermediate-event-none',
            translate('Create Intermediate/Boundary Event')
        ),
        'create.end-event': createAction(
            'bpmn:EndEvent',
            'event',
            'bpmn-icon-end-event-none'
        ),
        'create.exclusive-gateway': createAction(
            'bpmn:ExclusiveGateway',
            'gateway',
            'bpmn-icon-gateway-none',
            translate('Create Gateway')
        ),
        'create.task': createAction('bpmn:Task', 'activity', 'bpmn-icon-task'),
        'create.subprocess-expanded': createAction(
            'bpmn:SubProcess',
            'activity',
            'bpmn-icon-subprocess-expanded',
            translate('Create expanded SubProcess'),
            { isExpanded: true }
        )
    });
    return actions;
};
