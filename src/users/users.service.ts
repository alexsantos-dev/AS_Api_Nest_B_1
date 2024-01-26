import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaServiceDatabase';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }

  async create(data: User) {
    const result = await this.prisma.user.create({
      data,
    });
    return result;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: string, data: User) {
    return await this.prisma.user.update({
      data,
      where: {
        id: id
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: {
        id: id
      }
    });
  }
}
