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
    var newPart = inspectPart.newPart;
    var plane = part.plane;

    var partAr

    return getAssetRegistry('org.team3.airline.Part')
        .then(function(ar) {
            partAr = ar;
            var serviceLog = factory.newResource('org.team3.airline', 'ServiceLog');
            serviceLog.type = 'REPLACED';

            if (!part.serviceHistory) {
                part.serviceHistory = [];
            }

            part.serviceHistory.push(serviceLog);

            return ar.update(part);
        })
        .then(function() {
            var serviceLog = factory.newResource('org.team3.airline', 'ServiceLog');
            serviceLog.type = 'REPLACEMENT';

            if (!newPart.serviceHistory) {
                newPart.serviceHistory = [];
            }

            return partAr.update(newPart);
        })
        .then(function() {
            return getAssetRegistry('org.team3.airline.Plane');
        })
        .then(function(ar) {
            
        });
}

function onDestroyPart(destroyPart) {

}

function onCreatePart(createPart) {

}

