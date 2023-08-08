import { JwtService } from '@nestjs/jwt';
import { ProductApiService } from './service';
const Tasks = [];
const LocalService = [...Tasks, ProductApiService, JwtService];

const Services = [...LocalService];
export { LocalService, Services, ProductApiService };
