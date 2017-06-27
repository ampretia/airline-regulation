// export namespace org.team3.airline{
   export enum ServiceType {
      INSPECT,
      REPLACE,
      DESTROY,
      CREATE,
   }
   export enum PartType {
      INTERIOR_NON_CRITICAL,
      ELECTRONICS,
      FLIGHT_GUIDANCE,
      ENGINE,
      FLAPS,
      FUSELAGE,
      WINGS,
      LANDING_GEAR,
      TAIL,
   }
   export class Plane extends Asset {
      nNumber: string;
      parts: Part[];
   }
   export class Part extends Asset {
      partNumber: string;
      condition: number;
      type: PartType;
      serviceHistroy: ServiceLog[];
   }
   export class ServiceLog extends Asset {
      logId: string;
      type: ServiceType;
   }
   export class Mechanic extends Participant {
      faaMechanicId: string;
      certifications: PartType[];
   }
   export class Regulator extends Participant {
      regulatorId: string;
   }
   export abstract class PartTransaction extends Transaction {
      part: Part;
      mechanic: Mechanic;
   }
   export class AddPartToPlane extends PartTransaction {
      plane: Plane;
   }
   export class InspectPart extends PartTransaction {
      newCondition: number;
   }
   export class ReplacePart extends PartTransaction {
      newPart: Part;
   }
   export class DestroyPart extends PartTransaction {
   }
   export class CreatePart extends PartTransaction {
   }
// }
