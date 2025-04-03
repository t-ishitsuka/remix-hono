import type { StringValueObject } from "~/domains/libs/base/StringValueObject";
import { z } from "@hono/zod-openapi";

export class HealthCheckResponse {
  static messageProp = z.string().openapi({
    description: "ヘルスチェックメッセージ",
    example: "ok",
  });
  message: string;

  constructor(params: { message: StringValueObject }) {
    this.message = params.message.get();
  }
}

export const HealthCheckResponseSchema = z
  .object({
    message: HealthCheckResponse.messageProp,
  })
  .openapi({
    description: "アプリケーションヘルスチェックレスポンス",
    required: ["message"],
  });
