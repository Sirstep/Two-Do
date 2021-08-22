import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendApiModule } from 'src/backend/api/api.module';

import { SettingsService } from './services/settings/settings.service';
import { TaskService } from './services/task/task.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	declarations: [],
	imports: [CommonModule, BackendApiModule],
	providers: [AuthService, SettingsService, TaskService, UserService],
})
export class ApiModule {}
