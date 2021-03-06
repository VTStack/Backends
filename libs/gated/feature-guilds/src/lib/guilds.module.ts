import { Module } from '@nestjs/common';
import { TestingService } from './guilds.service';
import { TestingResolver } from './guilds.resolver';
import { GatedDataAccessModule } from '@v-thomas/gated/data-access';
import { DataGuildModule } from '@v-thomas/gated/data-access';
@Module({
  providers: [TestingResolver, TestingService],
  imports: [GatedDataAccessModule, DataGuildModule],
})
export class GuildModule {}
