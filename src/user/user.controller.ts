import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/Update-user.dto';

@Controller('user')
export class UserController {}
