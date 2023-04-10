import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateRoomDTO } from './dto'

@Injectable()
export class RoomsService {
    constructor(private prisma: PrismaService) {}
    async getAll() {
        const rooms = await this.prisma.room.findMany()
        return rooms
    }
    async createRoom(dto: CreateRoomDTO, imageName: string) {
        try {
            const room = await this.prisma.room.create({
                data: {
                    title: dto.title,
                    adress: dto.adress,
                    description: dto.description,
                    image: imageName,
                },
            })
            return room
        } catch (e) {
            if (e.code === 'P2002') {
                throw new ConflictException('Комната с таким названием уже существует')
            }
            return e
        }
    }
    async getRoom(roomId: number) {
        try {
            const room = this.prisma.room.findFirst({
                where: { id: +roomId },
                include: { Order: { where: { status: 'FULFILLED' } } },
            })
            return room
        } catch (e) {
            console.log(e, e.code)
            return e
        }
    }
}
