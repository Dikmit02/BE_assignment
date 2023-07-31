import { JwtService } from '@nestjs/jwt';
import { AuthApiService } from './service';
const Tasks = [];
const LocalService = [...Tasks, AuthApiService, JwtService];

const Services = [...LocalService];
export { LocalService, Services, AuthApiService };
