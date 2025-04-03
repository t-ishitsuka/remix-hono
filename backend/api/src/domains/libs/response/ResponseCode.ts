import { NumberValueObject } from "~/domains/libs/base/NumberValueObject";

export const CONTINUE = 100;
export const SWITCHING_PROTOCOLS = 101;
export const PROCESSING = 102;
export const EARLY_HINTS = 103;

export const OK = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NO_CONTENT = 204;
export const RESET_CONTENT = 205;
export const PARTIAL_CONTENT = 206;
export const MULTI_STATUS = 207;
export const ALREADY_REPORTED = 208;
export const IM_USED = 226;

export const MULTIPLE_CHOICES = 300;
export const MOVED_PERMANENTLY = 301;
export const FOUND = 302;
export const SEE_OTHER = 303;
export const NOT_MODIFIED = 304;
export const USE_PROXY = 305;
export const UNUSED = 306;
export const TEMPORARY_REDIRECT = 307;
export const PERMANENT_REDIRECT = 308;

export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const PAYMENT_REQUIRED = 402;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWED = 405;
export const NOT_ACCEPTABLE = 406;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_TIMEOUT = 408;
export const CONFLICT = 409;
export const GONE = 410;
export const LENGTH_REQUIRED = 411;
export const PRECONDITION_FAILED = 412;
export const PAYLOAD_TOO_LARGE = 413;
export const URI_TOO_LONG = 414;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const RANGE_NOT_SATISFIABLE = 416;
export const EXPECTATION_FAILED = 417;
export const IM_A_TEAPOT = 418;
export const MISDIRECTED_REQUEST = 421;
export const UNPROCESSABLE_ENTITY = 422;
export const LOCKED = 423;
export const FAILED_DEPENDENCY = 424;
export const TOO_EARLY = 425;
export const UPGRADE_REQUIRED = 426;
export const PRECONDITION_REQUIRED = 428;
export const TOO_MANY_REQUESTS = 429;
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;

export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIMEOUT = 504;
export const HTTP_VERSION_NOT_SUPPORTED = 505;
export const VARIANT_ALSO_NEGOTIATES = 506;
export const INSUFFICIENT_STORAGE = 507;
export const LOOP_DETECTED = 508;
export const NOT_EXTENDED = 510;
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

export class ResponseCode extends NumberValueObject {
  static CONTINUE = CONTINUE as 100;
  static SWITCHING_PROTOCOLS = SWITCHING_PROTOCOLS as 101;
  static PROCESSING = PROCESSING as 102;
  static EARLY_HINTS = EARLY_HINTS as 103;

  static OK = OK as 200;
  static CREATED = CREATED as 201;
  static ACCEPTED = ACCEPTED as 202;
  static NON_AUTHORITATIVE_INFORMATION = NON_AUTHORITATIVE_INFORMATION as 203;
  static NO_CONTENT = NO_CONTENT as 204;
  static RESET_CONTENT = RESET_CONTENT as 205;
  static PARTIAL_CONTENT = PARTIAL_CONTENT as 206;
  static MULTI_STATUS = MULTI_STATUS as 207;
  static ALREADY_REPORTED = ALREADY_REPORTED as 208;
  static IM_USED = IM_USED as 226;

  static MULTIPLE_CHOICES = MULTIPLE_CHOICES as 300;
  static MOVED_PERMANENTLY = MOVED_PERMANENTLY as 301;
  static FOUND = FOUND as 302;
  static SEE_OTHER = SEE_OTHER as 303;
  static NOT_MODIFIED = NOT_MODIFIED as 304;
  static USE_PROXY = USE_PROXY as 305;
  static UNUSED = UNUSED as 306;
  static TEMPORARY_REDIRECT = TEMPORARY_REDIRECT as 307;
  static PERMANENT_REDIRECT = PERMANENT_REDIRECT as 308;

  static BAD_REQUEST = BAD_REQUEST as 400;
  static UNAUTHORIZED = UNAUTHORIZED as 401;
  static PAYMENT_REQUIRED = PAYMENT_REQUIRED as 402;
  static FORBIDDEN = FORBIDDEN as 403;
  static NOT_FOUND = NOT_FOUND as 404;
  static METHOD_NOT_ALLOWED = METHOD_NOT_ALLOWED as 405;
  static NOT_ACCEPTABLE = NOT_ACCEPTABLE as 406;
  static PROXY_AUTHENTICATION_REQUIRED = PROXY_AUTHENTICATION_REQUIRED as 407;
  static REQUEST_TIMEOUT = REQUEST_TIMEOUT as 408;
  static CONFLICT = CONFLICT as 409;
  static GONE = GONE as 410;
  static LENGTH_REQUIRED = LENGTH_REQUIRED as 411;
  static PRECONDITION_FAILED = PRECONDITION_FAILED as 412;
  static PAYLOAD_TOO_LARGE = PAYLOAD_TOO_LARGE as 413;
  static URI_TOO_LONG = URI_TOO_LONG as 414;
  static UNSUPPORTED_MEDIA_TYPE = UNSUPPORTED_MEDIA_TYPE as 415;
  static RANGE_NOT_SATISFIABLE = RANGE_NOT_SATISFIABLE as 416;
  static EXPECTATION_FAILED = EXPECTATION_FAILED as 417;
  static IM_A_TEAPOT = IM_A_TEAPOT as 418;
  static MISDIRECTED_REQUEST = MISDIRECTED_REQUEST as 421;
  static UNPROCESSABLE_ENTITY = UNPROCESSABLE_ENTITY as 422;
  static LOCKED = LOCKED as 423;
  static FAILED_DEPENDENCY = FAILED_DEPENDENCY as 424;
  static TOO_EARLY = TOO_EARLY as 425;
  static UPGRADE_REQUIRED = UPGRADE_REQUIRED as 426;
  static PRECONDITION_REQUIRED = PRECONDITION_REQUIRED as 428;
  static TOO_MANY_REQUESTS = TOO_MANY_REQUESTS as 429;
  static REQUEST_HEADER_FIELDS_TOO_LARGE =
    REQUEST_HEADER_FIELDS_TOO_LARGE as 431;
  static UNAVAILABLE_FOR_LEGAL_REASONS = UNAVAILABLE_FOR_LEGAL_REASONS as 451;

  static INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR as 500;
  static NOT_IMPLEMENTED = NOT_IMPLEMENTED as 501;
  static BAD_GATEWAY = BAD_GATEWAY as 502;
  static SERVICE_UNAVAILABLE = SERVICE_UNAVAILABLE as 503;
  static GATEWAY_TIMEOUT = GATEWAY_TIMEOUT as 504;
  static HTTP_VERSION_NOT_SUPPORTED = HTTP_VERSION_NOT_SUPPORTED as 505;
  static VARIANT_ALSO_NEGOTIATES = VARIANT_ALSO_NEGOTIATES as 506;
  static INSUFFICIENT_STORAGE = INSUFFICIENT_STORAGE as 507;
  static LOOP_DETECTED = LOOP_DETECTED as 508;
  static NOT_EXTENDED = NOT_EXTENDED as 510;
  static NETWORK_AUTHENTICATION_REQUIRED =
    NETWORK_AUTHENTICATION_REQUIRED as 511;

  get() {
    return this.value;
  }
}
