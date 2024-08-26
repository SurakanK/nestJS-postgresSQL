import { ApiProperty } from '@nestjs/swagger';

export class CreateGachaDto {
    @ApiProperty()
    itemId: string[];
}
