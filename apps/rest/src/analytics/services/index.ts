import { JwtService } from '@nestjs/jwt';
import { AnalyticsApiService } from './service';
const Tasks = [];
const LocalService = [...Tasks, AnalyticsApiService, JwtService];

const Services = [...LocalService];
export { LocalService, Services, AnalyticsApiService };
