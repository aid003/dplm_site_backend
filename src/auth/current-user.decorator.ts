import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { RequestWithUser } from './session.guard';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<RequestWithUser>();
  return req.user;
});


