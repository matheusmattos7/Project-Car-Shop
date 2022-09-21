import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

export const zodCarSchema = vehicleSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(4),
});

export type ICar = z.infer<typeof zodCarSchema>;