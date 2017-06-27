'use strict';

function onInspectPart(inspectPart) {

    var factory = getFactory();
    var part = inspectPart.part;

    part.condition = inspectPart.newCondition;

    return getAssetRegistry('org.team3.airline.Part')
        .then(function(ar) {
            var serviceLog = factory.newResource('org.team3.airline', 'ServiceLog');
            serviceLog.type = inspectPart.serviceType;

            if (!part.serviceHistory) {
                part.serviceHistory = [];
            }

            part.serviceHistory.push(serviceLog);

            return ar.update(part);
        });

}

function onReplacePart(replacePart) {
    var factory = getFactory();
    var part = inspectPart.part;

    return getAssetRegistry('org.team3.airline.Part')
        .then(function(ar) {
            var serviceLog = factory.newResource('org.team3.airline', 'ServiceLog');
            serviceLog.type = inspectPart.serviceType;

            if (!part.serviceHistory) {
                part.serviceHistory = [];
            }

            part.serviceHistory.push(serviceLog);

            return ar.update(part);
        });
}

function onDestroyPart(destroyPart) {

}

function onCreatePart(createPart) {

}

