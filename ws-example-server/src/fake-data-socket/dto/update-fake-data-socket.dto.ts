import { PartialType } from '@nestjs/mapped-types';
import { CreateFakeDataSocketDto } from './create-fake-data-socket.dto';

export class UpdateFakeDataSocketDto extends PartialType(CreateFakeDataSocketDto) {
  id: number;
}
