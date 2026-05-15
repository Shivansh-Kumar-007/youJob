
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model SearchRun
 * 
 */
export type SearchRun = $Result.DefaultSelection<Prisma.$SearchRunPayload>
/**
 * Model SearchRunResult
 * 
 */
export type SearchRunResult = $Result.DefaultSelection<Prisma.$SearchRunResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanTier: {
  FREE: 'FREE',
  PRO: 'PRO'
};

export type PlanTier = (typeof PlanTier)[keyof typeof PlanTier]


export const ApplicationStatus: {
  CLICKED: 'CLICKED',
  APPLIED: 'APPLIED',
  SAVED: 'SAVED',
  DISMISSED: 'DISMISSED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const SearchRunType: {
  FREE_INITIAL: 'FREE_INITIAL',
  PAID_DEEP: 'PAID_DEEP'
};

export type SearchRunType = (typeof SearchRunType)[keyof typeof SearchRunType]


export const SearchRunStatus: {
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type SearchRunStatus = (typeof SearchRunStatus)[keyof typeof SearchRunStatus]

}

export type PlanTier = $Enums.PlanTier

export const PlanTier: typeof $Enums.PlanTier

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type SearchRunType = $Enums.SearchRunType

export const SearchRunType: typeof $Enums.SearchRunType

export type SearchRunStatus = $Enums.SearchRunStatus

export const SearchRunStatus: typeof $Enums.SearchRunStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchRun`: Exposes CRUD operations for the **SearchRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchRuns
    * const searchRuns = await prisma.searchRun.findMany()
    * ```
    */
  get searchRun(): Prisma.SearchRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchRunResult`: Exposes CRUD operations for the **SearchRunResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchRunResults
    * const searchRunResults = await prisma.searchRunResult.findMany()
    * ```
    */
  get searchRunResult(): Prisma.SearchRunResultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    Job: 'Job',
    JobApplication: 'JobApplication',
    SearchRun: 'SearchRun',
    SearchRunResult: 'SearchRunResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "job" | "jobApplication" | "searchRun" | "searchRunResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      SearchRun: {
        payload: Prisma.$SearchRunPayload<ExtArgs>
        fields: Prisma.SearchRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          findFirst: {
            args: Prisma.SearchRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          findMany: {
            args: Prisma.SearchRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>[]
          }
          create: {
            args: Prisma.SearchRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          createMany: {
            args: Prisma.SearchRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>[]
          }
          delete: {
            args: Prisma.SearchRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          update: {
            args: Prisma.SearchRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          deleteMany: {
            args: Prisma.SearchRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>[]
          }
          upsert: {
            args: Prisma.SearchRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunPayload>
          }
          aggregate: {
            args: Prisma.SearchRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchRun>
          }
          groupBy: {
            args: Prisma.SearchRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchRunCountArgs<ExtArgs>
            result: $Utils.Optional<SearchRunCountAggregateOutputType> | number
          }
        }
      }
      SearchRunResult: {
        payload: Prisma.$SearchRunResultPayload<ExtArgs>
        fields: Prisma.SearchRunResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchRunResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchRunResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          findFirst: {
            args: Prisma.SearchRunResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchRunResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          findMany: {
            args: Prisma.SearchRunResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>[]
          }
          create: {
            args: Prisma.SearchRunResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          createMany: {
            args: Prisma.SearchRunResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchRunResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>[]
          }
          delete: {
            args: Prisma.SearchRunResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          update: {
            args: Prisma.SearchRunResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          deleteMany: {
            args: Prisma.SearchRunResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchRunResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchRunResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>[]
          }
          upsert: {
            args: Prisma.SearchRunResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchRunResultPayload>
          }
          aggregate: {
            args: Prisma.SearchRunResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchRunResult>
          }
          groupBy: {
            args: Prisma.SearchRunResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchRunResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchRunResultCountArgs<ExtArgs>
            result: $Utils.Optional<SearchRunResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    job?: JobOmit
    jobApplication?: JobApplicationOmit
    searchRun?: SearchRunOmit
    searchRunResult?: SearchRunResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    searchRuns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    searchRuns?: boolean | UserCountOutputTypeCountSearchRunsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchRunWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
    searchResults: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
    searchResults?: boolean | JobCountOutputTypeCountSearchResultsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountSearchResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchRunResultWhereInput
  }


  /**
   * Count Type SearchRunCountOutputType
   */

  export type SearchRunCountOutputType = {
    results: number
  }

  export type SearchRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | SearchRunCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * SearchRunCountOutputType without action
   */
  export type SearchRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunCountOutputType
     */
    select?: SearchRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SearchRunCountOutputType without action
   */
  export type SearchRunCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchRunResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    dailyApplyLimit: number | null
  }

  export type UserSumAggregateOutputType = {
    dailyApplyLimit: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    planTier: $Enums.PlanTier | null
    dailyApplyLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    planTier: $Enums.PlanTier | null
    dailyApplyLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    planTier: number
    dailyApplyLimit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    dailyApplyLimit?: true
  }

  export type UserSumAggregateInputType = {
    dailyApplyLimit?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    planTier?: true
    dailyApplyLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    planTier?: true
    dailyApplyLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    planTier?: true
    dailyApplyLimit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    fullName: string | null
    planTier: $Enums.PlanTier
    dailyApplyLimit: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    planTier?: boolean
    dailyApplyLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    searchRuns?: boolean | User$searchRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    planTier?: boolean
    dailyApplyLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    planTier?: boolean
    dailyApplyLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    planTier?: boolean
    dailyApplyLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "planTier" | "dailyApplyLimit" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    searchRuns?: boolean | User$searchRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      searchRuns: Prisma.$SearchRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string | null
      planTier: $Enums.PlanTier
      dailyApplyLimit: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchRuns<T extends User$searchRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$searchRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly planTier: FieldRef<"User", 'PlanTier'>
    readonly dailyApplyLimit: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * User.searchRuns
   */
  export type User$searchRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    where?: SearchRunWhereInput
    orderBy?: SearchRunOrderByWithRelationInput | SearchRunOrderByWithRelationInput[]
    cursor?: SearchRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchRunScalarFieldEnum | SearchRunScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeUrl: string | null
    resumeText: string | null
    targetTitle: string | null
    summary: string | null
    remoteOnly: boolean | null
    salaryExpectation: string | null
    currency: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    resumeUrl: string | null
    resumeText: string | null
    targetTitle: string | null
    summary: string | null
    remoteOnly: boolean | null
    salaryExpectation: string | null
    currency: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    resumeUrl: number
    resumeText: number
    parsedProfile: number
    targetTitle: number
    summary: number
    remoteOnly: number
    preferredLocations: number
    salaryExpectation: number
    currency: number
    skills: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    resumeText?: true
    targetTitle?: true
    summary?: true
    remoteOnly?: true
    salaryExpectation?: true
    currency?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    resumeText?: true
    targetTitle?: true
    summary?: true
    remoteOnly?: true
    salaryExpectation?: true
    currency?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    resumeUrl?: true
    resumeText?: true
    parsedProfile?: true
    targetTitle?: true
    summary?: true
    remoteOnly?: true
    preferredLocations?: true
    salaryExpectation?: true
    currency?: true
    skills?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    resumeUrl: string | null
    resumeText: string | null
    parsedProfile: JsonValue | null
    targetTitle: string | null
    summary: string | null
    remoteOnly: boolean
    preferredLocations: string[]
    salaryExpectation: string | null
    currency: string | null
    skills: string[]
    keywords: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    resumeText?: boolean
    parsedProfile?: boolean
    targetTitle?: boolean
    summary?: boolean
    remoteOnly?: boolean
    preferredLocations?: boolean
    salaryExpectation?: boolean
    currency?: boolean
    skills?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    resumeText?: boolean
    parsedProfile?: boolean
    targetTitle?: boolean
    summary?: boolean
    remoteOnly?: boolean
    preferredLocations?: boolean
    salaryExpectation?: boolean
    currency?: boolean
    skills?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    resumeText?: boolean
    parsedProfile?: boolean
    targetTitle?: boolean
    summary?: boolean
    remoteOnly?: boolean
    preferredLocations?: boolean
    salaryExpectation?: boolean
    currency?: boolean
    skills?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    resumeUrl?: boolean
    resumeText?: boolean
    parsedProfile?: boolean
    targetTitle?: boolean
    summary?: boolean
    remoteOnly?: boolean
    preferredLocations?: boolean
    salaryExpectation?: boolean
    currency?: boolean
    skills?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resumeUrl" | "resumeText" | "parsedProfile" | "targetTitle" | "summary" | "remoteOnly" | "preferredLocations" | "salaryExpectation" | "currency" | "skills" | "keywords" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      resumeUrl: string | null
      resumeText: string | null
      parsedProfile: Prisma.JsonValue | null
      targetTitle: string | null
      summary: string | null
      remoteOnly: boolean
      preferredLocations: string[]
      salaryExpectation: string | null
      currency: string | null
      skills: string[]
      keywords: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly resumeUrl: FieldRef<"UserProfile", 'String'>
    readonly resumeText: FieldRef<"UserProfile", 'String'>
    readonly parsedProfile: FieldRef<"UserProfile", 'Json'>
    readonly targetTitle: FieldRef<"UserProfile", 'String'>
    readonly summary: FieldRef<"UserProfile", 'String'>
    readonly remoteOnly: FieldRef<"UserProfile", 'Boolean'>
    readonly preferredLocations: FieldRef<"UserProfile", 'String[]'>
    readonly salaryExpectation: FieldRef<"UserProfile", 'String'>
    readonly currency: FieldRef<"UserProfile", 'String'>
    readonly skills: FieldRef<"UserProfile", 'String[]'>
    readonly keywords: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type JobSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    companyUrl: string | null
    description: string | null
    requirements: string | null
    location: string | null
    locationType: string | null
    salary: string | null
    currency: string | null
    jobType: string | null
    level: string | null
    sourceUrl: string | null
    source: string | null
    sourceDomain: string | null
    discoveryQuery: string | null
    contentHash: string | null
    confidenceScore: number | null
    keywords: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    publishedAt: Date | null
    scrapedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    companyUrl: string | null
    description: string | null
    requirements: string | null
    location: string | null
    locationType: string | null
    salary: string | null
    currency: string | null
    jobType: string | null
    level: string | null
    sourceUrl: string | null
    source: string | null
    sourceDomain: string | null
    discoveryQuery: string | null
    contentHash: string | null
    confidenceScore: number | null
    keywords: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    publishedAt: Date | null
    scrapedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    archivedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    company: number
    companyUrl: number
    description: number
    requirements: number
    location: number
    locationType: number
    salary: number
    currency: number
    jobType: number
    level: number
    sourceUrl: number
    source: number
    sourceDomain: number
    discoveryQuery: number
    contentHash: number
    confidenceScore: number
    tags: number
    keywords: number
    firstSeenAt: number
    lastSeenAt: number
    publishedAt: number
    scrapedAt: number
    createdAt: number
    updatedAt: number
    archivedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type JobSumAggregateInputType = {
    confidenceScore?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyUrl?: true
    description?: true
    requirements?: true
    location?: true
    locationType?: true
    salary?: true
    currency?: true
    jobType?: true
    level?: true
    sourceUrl?: true
    source?: true
    sourceDomain?: true
    discoveryQuery?: true
    contentHash?: true
    confidenceScore?: true
    keywords?: true
    firstSeenAt?: true
    lastSeenAt?: true
    publishedAt?: true
    scrapedAt?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyUrl?: true
    description?: true
    requirements?: true
    location?: true
    locationType?: true
    salary?: true
    currency?: true
    jobType?: true
    level?: true
    sourceUrl?: true
    source?: true
    sourceDomain?: true
    discoveryQuery?: true
    contentHash?: true
    confidenceScore?: true
    keywords?: true
    firstSeenAt?: true
    lastSeenAt?: true
    publishedAt?: true
    scrapedAt?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyUrl?: true
    description?: true
    requirements?: true
    location?: true
    locationType?: true
    salary?: true
    currency?: true
    jobType?: true
    level?: true
    sourceUrl?: true
    source?: true
    sourceDomain?: true
    discoveryQuery?: true
    contentHash?: true
    confidenceScore?: true
    tags?: true
    keywords?: true
    firstSeenAt?: true
    lastSeenAt?: true
    publishedAt?: true
    scrapedAt?: true
    createdAt?: true
    updatedAt?: true
    archivedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    company: string
    companyUrl: string | null
    description: string
    requirements: string | null
    location: string | null
    locationType: string | null
    salary: string | null
    currency: string | null
    jobType: string | null
    level: string | null
    sourceUrl: string
    source: string
    sourceDomain: string | null
    discoveryQuery: string | null
    contentHash: string | null
    confidenceScore: number | null
    tags: string[]
    keywords: string | null
    firstSeenAt: Date
    lastSeenAt: Date
    publishedAt: Date | null
    scrapedAt: Date
    createdAt: Date
    updatedAt: Date
    archivedAt: Date | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyUrl?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    locationType?: boolean
    salary?: boolean
    currency?: boolean
    jobType?: boolean
    level?: boolean
    sourceUrl?: boolean
    source?: boolean
    sourceDomain?: boolean
    discoveryQuery?: boolean
    contentHash?: boolean
    confidenceScore?: boolean
    tags?: boolean
    keywords?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    publishedAt?: boolean
    scrapedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    searchResults?: boolean | Job$searchResultsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyUrl?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    locationType?: boolean
    salary?: boolean
    currency?: boolean
    jobType?: boolean
    level?: boolean
    sourceUrl?: boolean
    source?: boolean
    sourceDomain?: boolean
    discoveryQuery?: boolean
    contentHash?: boolean
    confidenceScore?: boolean
    tags?: boolean
    keywords?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    publishedAt?: boolean
    scrapedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyUrl?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    locationType?: boolean
    salary?: boolean
    currency?: boolean
    jobType?: boolean
    level?: boolean
    sourceUrl?: boolean
    source?: boolean
    sourceDomain?: boolean
    discoveryQuery?: boolean
    contentHash?: boolean
    confidenceScore?: boolean
    tags?: boolean
    keywords?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    publishedAt?: boolean
    scrapedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    companyUrl?: boolean
    description?: boolean
    requirements?: boolean
    location?: boolean
    locationType?: boolean
    salary?: boolean
    currency?: boolean
    jobType?: boolean
    level?: boolean
    sourceUrl?: boolean
    source?: boolean
    sourceDomain?: boolean
    discoveryQuery?: boolean
    contentHash?: boolean
    confidenceScore?: boolean
    tags?: boolean
    keywords?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    publishedAt?: boolean
    scrapedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    archivedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "companyUrl" | "description" | "requirements" | "location" | "locationType" | "salary" | "currency" | "jobType" | "level" | "sourceUrl" | "source" | "sourceDomain" | "discoveryQuery" | "contentHash" | "confidenceScore" | "tags" | "keywords" | "firstSeenAt" | "lastSeenAt" | "publishedAt" | "scrapedAt" | "createdAt" | "updatedAt" | "archivedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    searchResults?: boolean | Job$searchResultsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      searchResults: Prisma.$SearchRunResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      companyUrl: string | null
      description: string
      requirements: string | null
      location: string | null
      locationType: string | null
      salary: string | null
      currency: string | null
      jobType: string | null
      level: string | null
      sourceUrl: string
      source: string
      sourceDomain: string | null
      discoveryQuery: string | null
      contentHash: string | null
      confidenceScore: number | null
      tags: string[]
      keywords: string | null
      firstSeenAt: Date
      lastSeenAt: Date
      publishedAt: Date | null
      scrapedAt: Date
      createdAt: Date
      updatedAt: Date
      archivedAt: Date | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchResults<T extends Job$searchResultsArgs<ExtArgs> = {}>(args?: Subset<T, Job$searchResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly company: FieldRef<"Job", 'String'>
    readonly companyUrl: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly requirements: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly locationType: FieldRef<"Job", 'String'>
    readonly salary: FieldRef<"Job", 'String'>
    readonly currency: FieldRef<"Job", 'String'>
    readonly jobType: FieldRef<"Job", 'String'>
    readonly level: FieldRef<"Job", 'String'>
    readonly sourceUrl: FieldRef<"Job", 'String'>
    readonly source: FieldRef<"Job", 'String'>
    readonly sourceDomain: FieldRef<"Job", 'String'>
    readonly discoveryQuery: FieldRef<"Job", 'String'>
    readonly contentHash: FieldRef<"Job", 'String'>
    readonly confidenceScore: FieldRef<"Job", 'Float'>
    readonly tags: FieldRef<"Job", 'String[]'>
    readonly keywords: FieldRef<"Job", 'String'>
    readonly firstSeenAt: FieldRef<"Job", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Job", 'DateTime'>
    readonly publishedAt: FieldRef<"Job", 'DateTime'>
    readonly scrapedAt: FieldRef<"Job", 'DateTime'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
    readonly archivedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Job.searchResults
   */
  export type Job$searchResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    where?: SearchRunResultWhereInput
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    cursor?: SearchRunResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchRunResultScalarFieldEnum | SearchRunResultScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    status: $Enums.ApplicationStatus | null
    clickedAt: Date | null
    appliedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    status: $Enums.ApplicationStatus | null
    clickedAt: Date | null
    appliedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    status: number
    clickedAt: number
    appliedAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    status?: true
    clickedAt?: true
    appliedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    status?: true
    clickedAt?: true
    appliedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    status?: true
    clickedAt?: true
    appliedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    status: $Enums.ApplicationStatus
    clickedAt: Date
    appliedAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    status?: boolean
    clickedAt?: boolean
    appliedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    status?: boolean
    clickedAt?: boolean
    appliedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    status?: boolean
    clickedAt?: boolean
    appliedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    status?: boolean
    clickedAt?: boolean
    appliedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jobId" | "status" | "clickedAt" | "appliedAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobId: string
      status: $Enums.ApplicationStatus
      clickedAt: Date
      appliedAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly userId: FieldRef<"JobApplication", 'String'>
    readonly jobId: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'ApplicationStatus'>
    readonly clickedAt: FieldRef<"JobApplication", 'DateTime'>
    readonly appliedAt: FieldRef<"JobApplication", 'DateTime'>
    readonly notes: FieldRef<"JobApplication", 'String'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Model SearchRun
   */

  export type AggregateSearchRun = {
    _count: SearchRunCountAggregateOutputType | null
    _avg: SearchRunAvgAggregateOutputType | null
    _sum: SearchRunSumAggregateOutputType | null
    _min: SearchRunMinAggregateOutputType | null
    _max: SearchRunMaxAggregateOutputType | null
  }

  export type SearchRunAvgAggregateOutputType = {
    resultLimit: number | null
    fetchedCount: number | null
    rankedCount: number | null
  }

  export type SearchRunSumAggregateOutputType = {
    resultLimit: number | null
    fetchedCount: number | null
    rankedCount: number | null
  }

  export type SearchRunMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SearchRunType | null
    status: $Enums.SearchRunStatus | null
    resultLimit: number | null
    fetchedCount: number | null
    rankedCount: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchRunMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SearchRunType | null
    status: $Enums.SearchRunStatus | null
    resultLimit: number | null
    fetchedCount: number | null
    rankedCount: number | null
    errorMessage: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchRunCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    querySet: number
    profileSnapshot: number
    resultLimit: number
    fetchedCount: number
    rankedCount: number
    errorMessage: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchRunAvgAggregateInputType = {
    resultLimit?: true
    fetchedCount?: true
    rankedCount?: true
  }

  export type SearchRunSumAggregateInputType = {
    resultLimit?: true
    fetchedCount?: true
    rankedCount?: true
  }

  export type SearchRunMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    resultLimit?: true
    fetchedCount?: true
    rankedCount?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchRunMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    resultLimit?: true
    fetchedCount?: true
    rankedCount?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchRunCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    querySet?: true
    profileSnapshot?: true
    resultLimit?: true
    fetchedCount?: true
    rankedCount?: true
    errorMessage?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchRun to aggregate.
     */
    where?: SearchRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRuns to fetch.
     */
    orderBy?: SearchRunOrderByWithRelationInput | SearchRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchRuns
    **/
    _count?: true | SearchRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchRunMaxAggregateInputType
  }

  export type GetSearchRunAggregateType<T extends SearchRunAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchRun[P]>
      : GetScalarType<T[P], AggregateSearchRun[P]>
  }




  export type SearchRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchRunWhereInput
    orderBy?: SearchRunOrderByWithAggregationInput | SearchRunOrderByWithAggregationInput[]
    by: SearchRunScalarFieldEnum[] | SearchRunScalarFieldEnum
    having?: SearchRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchRunCountAggregateInputType | true
    _avg?: SearchRunAvgAggregateInputType
    _sum?: SearchRunSumAggregateInputType
    _min?: SearchRunMinAggregateInputType
    _max?: SearchRunMaxAggregateInputType
  }

  export type SearchRunGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.SearchRunType
    status: $Enums.SearchRunStatus
    querySet: string[]
    profileSnapshot: JsonValue | null
    resultLimit: number
    fetchedCount: number
    rankedCount: number
    errorMessage: string | null
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SearchRunCountAggregateOutputType | null
    _avg: SearchRunAvgAggregateOutputType | null
    _sum: SearchRunSumAggregateOutputType | null
    _min: SearchRunMinAggregateOutputType | null
    _max: SearchRunMaxAggregateOutputType | null
  }

  type GetSearchRunGroupByPayload<T extends SearchRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchRunGroupByOutputType[P]>
            : GetScalarType<T[P], SearchRunGroupByOutputType[P]>
        }
      >
    >


  export type SearchRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    querySet?: boolean
    profileSnapshot?: boolean
    resultLimit?: boolean
    fetchedCount?: boolean
    rankedCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    results?: boolean | SearchRun$resultsArgs<ExtArgs>
    _count?: boolean | SearchRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRun"]>

  export type SearchRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    querySet?: boolean
    profileSnapshot?: boolean
    resultLimit?: boolean
    fetchedCount?: boolean
    rankedCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRun"]>

  export type SearchRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    querySet?: boolean
    profileSnapshot?: boolean
    resultLimit?: boolean
    fetchedCount?: boolean
    rankedCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRun"]>

  export type SearchRunSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    querySet?: boolean
    profileSnapshot?: boolean
    resultLimit?: boolean
    fetchedCount?: boolean
    rankedCount?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "status" | "querySet" | "profileSnapshot" | "resultLimit" | "fetchedCount" | "rankedCount" | "errorMessage" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["searchRun"]>
  export type SearchRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    results?: boolean | SearchRun$resultsArgs<ExtArgs>
    _count?: boolean | SearchRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SearchRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SearchRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SearchRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      results: Prisma.$SearchRunResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.SearchRunType
      status: $Enums.SearchRunStatus
      querySet: string[]
      profileSnapshot: Prisma.JsonValue | null
      resultLimit: number
      fetchedCount: number
      rankedCount: number
      errorMessage: string | null
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchRun"]>
    composites: {}
  }

  type SearchRunGetPayload<S extends boolean | null | undefined | SearchRunDefaultArgs> = $Result.GetResult<Prisma.$SearchRunPayload, S>

  type SearchRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchRunCountAggregateInputType | true
    }

  export interface SearchRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchRun'], meta: { name: 'SearchRun' } }
    /**
     * Find zero or one SearchRun that matches the filter.
     * @param {SearchRunFindUniqueArgs} args - Arguments to find a SearchRun
     * @example
     * // Get one SearchRun
     * const searchRun = await prisma.searchRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchRunFindUniqueArgs>(args: SelectSubset<T, SearchRunFindUniqueArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchRunFindUniqueOrThrowArgs} args - Arguments to find a SearchRun
     * @example
     * // Get one SearchRun
     * const searchRun = await prisma.searchRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchRunFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunFindFirstArgs} args - Arguments to find a SearchRun
     * @example
     * // Get one SearchRun
     * const searchRun = await prisma.searchRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchRunFindFirstArgs>(args?: SelectSubset<T, SearchRunFindFirstArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunFindFirstOrThrowArgs} args - Arguments to find a SearchRun
     * @example
     * // Get one SearchRun
     * const searchRun = await prisma.searchRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchRunFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchRuns
     * const searchRuns = await prisma.searchRun.findMany()
     * 
     * // Get first 10 SearchRuns
     * const searchRuns = await prisma.searchRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchRunWithIdOnly = await prisma.searchRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchRunFindManyArgs>(args?: SelectSubset<T, SearchRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchRun.
     * @param {SearchRunCreateArgs} args - Arguments to create a SearchRun.
     * @example
     * // Create one SearchRun
     * const SearchRun = await prisma.searchRun.create({
     *   data: {
     *     // ... data to create a SearchRun
     *   }
     * })
     * 
     */
    create<T extends SearchRunCreateArgs>(args: SelectSubset<T, SearchRunCreateArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchRuns.
     * @param {SearchRunCreateManyArgs} args - Arguments to create many SearchRuns.
     * @example
     * // Create many SearchRuns
     * const searchRun = await prisma.searchRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchRunCreateManyArgs>(args?: SelectSubset<T, SearchRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchRuns and returns the data saved in the database.
     * @param {SearchRunCreateManyAndReturnArgs} args - Arguments to create many SearchRuns.
     * @example
     * // Create many SearchRuns
     * const searchRun = await prisma.searchRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchRuns and only return the `id`
     * const searchRunWithIdOnly = await prisma.searchRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchRunCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchRun.
     * @param {SearchRunDeleteArgs} args - Arguments to delete one SearchRun.
     * @example
     * // Delete one SearchRun
     * const SearchRun = await prisma.searchRun.delete({
     *   where: {
     *     // ... filter to delete one SearchRun
     *   }
     * })
     * 
     */
    delete<T extends SearchRunDeleteArgs>(args: SelectSubset<T, SearchRunDeleteArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchRun.
     * @param {SearchRunUpdateArgs} args - Arguments to update one SearchRun.
     * @example
     * // Update one SearchRun
     * const searchRun = await prisma.searchRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchRunUpdateArgs>(args: SelectSubset<T, SearchRunUpdateArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchRuns.
     * @param {SearchRunDeleteManyArgs} args - Arguments to filter SearchRuns to delete.
     * @example
     * // Delete a few SearchRuns
     * const { count } = await prisma.searchRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchRunDeleteManyArgs>(args?: SelectSubset<T, SearchRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchRuns
     * const searchRun = await prisma.searchRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchRunUpdateManyArgs>(args: SelectSubset<T, SearchRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchRuns and returns the data updated in the database.
     * @param {SearchRunUpdateManyAndReturnArgs} args - Arguments to update many SearchRuns.
     * @example
     * // Update many SearchRuns
     * const searchRun = await prisma.searchRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchRuns and only return the `id`
     * const searchRunWithIdOnly = await prisma.searchRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchRunUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchRun.
     * @param {SearchRunUpsertArgs} args - Arguments to update or create a SearchRun.
     * @example
     * // Update or create a SearchRun
     * const searchRun = await prisma.searchRun.upsert({
     *   create: {
     *     // ... data to create a SearchRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchRun we want to update
     *   }
     * })
     */
    upsert<T extends SearchRunUpsertArgs>(args: SelectSubset<T, SearchRunUpsertArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunCountArgs} args - Arguments to filter SearchRuns to count.
     * @example
     * // Count the number of SearchRuns
     * const count = await prisma.searchRun.count({
     *   where: {
     *     // ... the filter for the SearchRuns we want to count
     *   }
     * })
    **/
    count<T extends SearchRunCountArgs>(
      args?: Subset<T, SearchRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchRunAggregateArgs>(args: Subset<T, SearchRunAggregateArgs>): Prisma.PrismaPromise<GetSearchRunAggregateType<T>>

    /**
     * Group by SearchRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchRunGroupByArgs['orderBy'] }
        : { orderBy?: SearchRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchRun model
   */
  readonly fields: SearchRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends SearchRun$resultsArgs<ExtArgs> = {}>(args?: Subset<T, SearchRun$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchRun model
   */
  interface SearchRunFieldRefs {
    readonly id: FieldRef<"SearchRun", 'String'>
    readonly userId: FieldRef<"SearchRun", 'String'>
    readonly type: FieldRef<"SearchRun", 'SearchRunType'>
    readonly status: FieldRef<"SearchRun", 'SearchRunStatus'>
    readonly querySet: FieldRef<"SearchRun", 'String[]'>
    readonly profileSnapshot: FieldRef<"SearchRun", 'Json'>
    readonly resultLimit: FieldRef<"SearchRun", 'Int'>
    readonly fetchedCount: FieldRef<"SearchRun", 'Int'>
    readonly rankedCount: FieldRef<"SearchRun", 'Int'>
    readonly errorMessage: FieldRef<"SearchRun", 'String'>
    readonly startedAt: FieldRef<"SearchRun", 'DateTime'>
    readonly completedAt: FieldRef<"SearchRun", 'DateTime'>
    readonly createdAt: FieldRef<"SearchRun", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchRun findUnique
   */
  export type SearchRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter, which SearchRun to fetch.
     */
    where: SearchRunWhereUniqueInput
  }

  /**
   * SearchRun findUniqueOrThrow
   */
  export type SearchRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter, which SearchRun to fetch.
     */
    where: SearchRunWhereUniqueInput
  }

  /**
   * SearchRun findFirst
   */
  export type SearchRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter, which SearchRun to fetch.
     */
    where?: SearchRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRuns to fetch.
     */
    orderBy?: SearchRunOrderByWithRelationInput | SearchRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchRuns.
     */
    cursor?: SearchRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRuns.
     */
    distinct?: SearchRunScalarFieldEnum | SearchRunScalarFieldEnum[]
  }

  /**
   * SearchRun findFirstOrThrow
   */
  export type SearchRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter, which SearchRun to fetch.
     */
    where?: SearchRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRuns to fetch.
     */
    orderBy?: SearchRunOrderByWithRelationInput | SearchRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchRuns.
     */
    cursor?: SearchRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRuns.
     */
    distinct?: SearchRunScalarFieldEnum | SearchRunScalarFieldEnum[]
  }

  /**
   * SearchRun findMany
   */
  export type SearchRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter, which SearchRuns to fetch.
     */
    where?: SearchRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRuns to fetch.
     */
    orderBy?: SearchRunOrderByWithRelationInput | SearchRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchRuns.
     */
    cursor?: SearchRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRuns.
     */
    distinct?: SearchRunScalarFieldEnum | SearchRunScalarFieldEnum[]
  }

  /**
   * SearchRun create
   */
  export type SearchRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchRun.
     */
    data: XOR<SearchRunCreateInput, SearchRunUncheckedCreateInput>
  }

  /**
   * SearchRun createMany
   */
  export type SearchRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchRuns.
     */
    data: SearchRunCreateManyInput | SearchRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchRun createManyAndReturn
   */
  export type SearchRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * The data used to create many SearchRuns.
     */
    data: SearchRunCreateManyInput | SearchRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchRun update
   */
  export type SearchRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchRun.
     */
    data: XOR<SearchRunUpdateInput, SearchRunUncheckedUpdateInput>
    /**
     * Choose, which SearchRun to update.
     */
    where: SearchRunWhereUniqueInput
  }

  /**
   * SearchRun updateMany
   */
  export type SearchRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchRuns.
     */
    data: XOR<SearchRunUpdateManyMutationInput, SearchRunUncheckedUpdateManyInput>
    /**
     * Filter which SearchRuns to update
     */
    where?: SearchRunWhereInput
    /**
     * Limit how many SearchRuns to update.
     */
    limit?: number
  }

  /**
   * SearchRun updateManyAndReturn
   */
  export type SearchRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * The data used to update SearchRuns.
     */
    data: XOR<SearchRunUpdateManyMutationInput, SearchRunUncheckedUpdateManyInput>
    /**
     * Filter which SearchRuns to update
     */
    where?: SearchRunWhereInput
    /**
     * Limit how many SearchRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchRun upsert
   */
  export type SearchRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchRun to update in case it exists.
     */
    where: SearchRunWhereUniqueInput
    /**
     * In case the SearchRun found by the `where` argument doesn't exist, create a new SearchRun with this data.
     */
    create: XOR<SearchRunCreateInput, SearchRunUncheckedCreateInput>
    /**
     * In case the SearchRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchRunUpdateInput, SearchRunUncheckedUpdateInput>
  }

  /**
   * SearchRun delete
   */
  export type SearchRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
    /**
     * Filter which SearchRun to delete.
     */
    where: SearchRunWhereUniqueInput
  }

  /**
   * SearchRun deleteMany
   */
  export type SearchRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchRuns to delete
     */
    where?: SearchRunWhereInput
    /**
     * Limit how many SearchRuns to delete.
     */
    limit?: number
  }

  /**
   * SearchRun.results
   */
  export type SearchRun$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    where?: SearchRunResultWhereInput
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    cursor?: SearchRunResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchRunResultScalarFieldEnum | SearchRunResultScalarFieldEnum[]
  }

  /**
   * SearchRun without action
   */
  export type SearchRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRun
     */
    select?: SearchRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRun
     */
    omit?: SearchRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunInclude<ExtArgs> | null
  }


  /**
   * Model SearchRunResult
   */

  export type AggregateSearchRunResult = {
    _count: SearchRunResultCountAggregateOutputType | null
    _avg: SearchRunResultAvgAggregateOutputType | null
    _sum: SearchRunResultSumAggregateOutputType | null
    _min: SearchRunResultMinAggregateOutputType | null
    _max: SearchRunResultMaxAggregateOutputType | null
  }

  export type SearchRunResultAvgAggregateOutputType = {
    rank: number | null
    score: number | null
  }

  export type SearchRunResultSumAggregateOutputType = {
    rank: number | null
    score: number | null
  }

  export type SearchRunResultMinAggregateOutputType = {
    id: string | null
    searchRunId: string | null
    jobId: string | null
    rank: number | null
    score: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SearchRunResultMaxAggregateOutputType = {
    id: string | null
    searchRunId: string | null
    jobId: string | null
    rank: number | null
    score: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SearchRunResultCountAggregateOutputType = {
    id: number
    searchRunId: number
    jobId: number
    rank: number
    score: number
    reason: number
    createdAt: number
    _all: number
  }


  export type SearchRunResultAvgAggregateInputType = {
    rank?: true
    score?: true
  }

  export type SearchRunResultSumAggregateInputType = {
    rank?: true
    score?: true
  }

  export type SearchRunResultMinAggregateInputType = {
    id?: true
    searchRunId?: true
    jobId?: true
    rank?: true
    score?: true
    reason?: true
    createdAt?: true
  }

  export type SearchRunResultMaxAggregateInputType = {
    id?: true
    searchRunId?: true
    jobId?: true
    rank?: true
    score?: true
    reason?: true
    createdAt?: true
  }

  export type SearchRunResultCountAggregateInputType = {
    id?: true
    searchRunId?: true
    jobId?: true
    rank?: true
    score?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type SearchRunResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchRunResult to aggregate.
     */
    where?: SearchRunResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRunResults to fetch.
     */
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchRunResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRunResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRunResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchRunResults
    **/
    _count?: true | SearchRunResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchRunResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchRunResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchRunResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchRunResultMaxAggregateInputType
  }

  export type GetSearchRunResultAggregateType<T extends SearchRunResultAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchRunResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchRunResult[P]>
      : GetScalarType<T[P], AggregateSearchRunResult[P]>
  }




  export type SearchRunResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchRunResultWhereInput
    orderBy?: SearchRunResultOrderByWithAggregationInput | SearchRunResultOrderByWithAggregationInput[]
    by: SearchRunResultScalarFieldEnum[] | SearchRunResultScalarFieldEnum
    having?: SearchRunResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchRunResultCountAggregateInputType | true
    _avg?: SearchRunResultAvgAggregateInputType
    _sum?: SearchRunResultSumAggregateInputType
    _min?: SearchRunResultMinAggregateInputType
    _max?: SearchRunResultMaxAggregateInputType
  }

  export type SearchRunResultGroupByOutputType = {
    id: string
    searchRunId: string
    jobId: string
    rank: number
    score: number | null
    reason: string | null
    createdAt: Date
    _count: SearchRunResultCountAggregateOutputType | null
    _avg: SearchRunResultAvgAggregateOutputType | null
    _sum: SearchRunResultSumAggregateOutputType | null
    _min: SearchRunResultMinAggregateOutputType | null
    _max: SearchRunResultMaxAggregateOutputType | null
  }

  type GetSearchRunResultGroupByPayload<T extends SearchRunResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchRunResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchRunResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchRunResultGroupByOutputType[P]>
            : GetScalarType<T[P], SearchRunResultGroupByOutputType[P]>
        }
      >
    >


  export type SearchRunResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchRunId?: boolean
    jobId?: boolean
    rank?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRunResult"]>

  export type SearchRunResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchRunId?: boolean
    jobId?: boolean
    rank?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRunResult"]>

  export type SearchRunResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchRunId?: boolean
    jobId?: boolean
    rank?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchRunResult"]>

  export type SearchRunResultSelectScalar = {
    id?: boolean
    searchRunId?: boolean
    jobId?: boolean
    rank?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type SearchRunResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "searchRunId" | "jobId" | "rank" | "score" | "reason" | "createdAt", ExtArgs["result"]["searchRunResult"]>
  export type SearchRunResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type SearchRunResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type SearchRunResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchRun?: boolean | SearchRunDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $SearchRunResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchRunResult"
    objects: {
      searchRun: Prisma.$SearchRunPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      searchRunId: string
      jobId: string
      rank: number
      score: number | null
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["searchRunResult"]>
    composites: {}
  }

  type SearchRunResultGetPayload<S extends boolean | null | undefined | SearchRunResultDefaultArgs> = $Result.GetResult<Prisma.$SearchRunResultPayload, S>

  type SearchRunResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchRunResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchRunResultCountAggregateInputType | true
    }

  export interface SearchRunResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchRunResult'], meta: { name: 'SearchRunResult' } }
    /**
     * Find zero or one SearchRunResult that matches the filter.
     * @param {SearchRunResultFindUniqueArgs} args - Arguments to find a SearchRunResult
     * @example
     * // Get one SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchRunResultFindUniqueArgs>(args: SelectSubset<T, SearchRunResultFindUniqueArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchRunResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchRunResultFindUniqueOrThrowArgs} args - Arguments to find a SearchRunResult
     * @example
     * // Get one SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchRunResultFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchRunResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchRunResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultFindFirstArgs} args - Arguments to find a SearchRunResult
     * @example
     * // Get one SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchRunResultFindFirstArgs>(args?: SelectSubset<T, SearchRunResultFindFirstArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchRunResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultFindFirstOrThrowArgs} args - Arguments to find a SearchRunResult
     * @example
     * // Get one SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchRunResultFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchRunResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchRunResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchRunResults
     * const searchRunResults = await prisma.searchRunResult.findMany()
     * 
     * // Get first 10 SearchRunResults
     * const searchRunResults = await prisma.searchRunResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchRunResultWithIdOnly = await prisma.searchRunResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchRunResultFindManyArgs>(args?: SelectSubset<T, SearchRunResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchRunResult.
     * @param {SearchRunResultCreateArgs} args - Arguments to create a SearchRunResult.
     * @example
     * // Create one SearchRunResult
     * const SearchRunResult = await prisma.searchRunResult.create({
     *   data: {
     *     // ... data to create a SearchRunResult
     *   }
     * })
     * 
     */
    create<T extends SearchRunResultCreateArgs>(args: SelectSubset<T, SearchRunResultCreateArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchRunResults.
     * @param {SearchRunResultCreateManyArgs} args - Arguments to create many SearchRunResults.
     * @example
     * // Create many SearchRunResults
     * const searchRunResult = await prisma.searchRunResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchRunResultCreateManyArgs>(args?: SelectSubset<T, SearchRunResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchRunResults and returns the data saved in the database.
     * @param {SearchRunResultCreateManyAndReturnArgs} args - Arguments to create many SearchRunResults.
     * @example
     * // Create many SearchRunResults
     * const searchRunResult = await prisma.searchRunResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchRunResults and only return the `id`
     * const searchRunResultWithIdOnly = await prisma.searchRunResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchRunResultCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchRunResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchRunResult.
     * @param {SearchRunResultDeleteArgs} args - Arguments to delete one SearchRunResult.
     * @example
     * // Delete one SearchRunResult
     * const SearchRunResult = await prisma.searchRunResult.delete({
     *   where: {
     *     // ... filter to delete one SearchRunResult
     *   }
     * })
     * 
     */
    delete<T extends SearchRunResultDeleteArgs>(args: SelectSubset<T, SearchRunResultDeleteArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchRunResult.
     * @param {SearchRunResultUpdateArgs} args - Arguments to update one SearchRunResult.
     * @example
     * // Update one SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchRunResultUpdateArgs>(args: SelectSubset<T, SearchRunResultUpdateArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchRunResults.
     * @param {SearchRunResultDeleteManyArgs} args - Arguments to filter SearchRunResults to delete.
     * @example
     * // Delete a few SearchRunResults
     * const { count } = await prisma.searchRunResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchRunResultDeleteManyArgs>(args?: SelectSubset<T, SearchRunResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchRunResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchRunResults
     * const searchRunResult = await prisma.searchRunResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchRunResultUpdateManyArgs>(args: SelectSubset<T, SearchRunResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchRunResults and returns the data updated in the database.
     * @param {SearchRunResultUpdateManyAndReturnArgs} args - Arguments to update many SearchRunResults.
     * @example
     * // Update many SearchRunResults
     * const searchRunResult = await prisma.searchRunResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchRunResults and only return the `id`
     * const searchRunResultWithIdOnly = await prisma.searchRunResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchRunResultUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchRunResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchRunResult.
     * @param {SearchRunResultUpsertArgs} args - Arguments to update or create a SearchRunResult.
     * @example
     * // Update or create a SearchRunResult
     * const searchRunResult = await prisma.searchRunResult.upsert({
     *   create: {
     *     // ... data to create a SearchRunResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchRunResult we want to update
     *   }
     * })
     */
    upsert<T extends SearchRunResultUpsertArgs>(args: SelectSubset<T, SearchRunResultUpsertArgs<ExtArgs>>): Prisma__SearchRunResultClient<$Result.GetResult<Prisma.$SearchRunResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchRunResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultCountArgs} args - Arguments to filter SearchRunResults to count.
     * @example
     * // Count the number of SearchRunResults
     * const count = await prisma.searchRunResult.count({
     *   where: {
     *     // ... the filter for the SearchRunResults we want to count
     *   }
     * })
    **/
    count<T extends SearchRunResultCountArgs>(
      args?: Subset<T, SearchRunResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchRunResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchRunResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchRunResultAggregateArgs>(args: Subset<T, SearchRunResultAggregateArgs>): Prisma.PrismaPromise<GetSearchRunResultAggregateType<T>>

    /**
     * Group by SearchRunResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchRunResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchRunResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchRunResultGroupByArgs['orderBy'] }
        : { orderBy?: SearchRunResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchRunResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchRunResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchRunResult model
   */
  readonly fields: SearchRunResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchRunResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchRunResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    searchRun<T extends SearchRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SearchRunDefaultArgs<ExtArgs>>): Prisma__SearchRunClient<$Result.GetResult<Prisma.$SearchRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchRunResult model
   */
  interface SearchRunResultFieldRefs {
    readonly id: FieldRef<"SearchRunResult", 'String'>
    readonly searchRunId: FieldRef<"SearchRunResult", 'String'>
    readonly jobId: FieldRef<"SearchRunResult", 'String'>
    readonly rank: FieldRef<"SearchRunResult", 'Int'>
    readonly score: FieldRef<"SearchRunResult", 'Float'>
    readonly reason: FieldRef<"SearchRunResult", 'String'>
    readonly createdAt: FieldRef<"SearchRunResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchRunResult findUnique
   */
  export type SearchRunResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter, which SearchRunResult to fetch.
     */
    where: SearchRunResultWhereUniqueInput
  }

  /**
   * SearchRunResult findUniqueOrThrow
   */
  export type SearchRunResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter, which SearchRunResult to fetch.
     */
    where: SearchRunResultWhereUniqueInput
  }

  /**
   * SearchRunResult findFirst
   */
  export type SearchRunResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter, which SearchRunResult to fetch.
     */
    where?: SearchRunResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRunResults to fetch.
     */
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchRunResults.
     */
    cursor?: SearchRunResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRunResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRunResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRunResults.
     */
    distinct?: SearchRunResultScalarFieldEnum | SearchRunResultScalarFieldEnum[]
  }

  /**
   * SearchRunResult findFirstOrThrow
   */
  export type SearchRunResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter, which SearchRunResult to fetch.
     */
    where?: SearchRunResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRunResults to fetch.
     */
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchRunResults.
     */
    cursor?: SearchRunResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRunResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRunResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRunResults.
     */
    distinct?: SearchRunResultScalarFieldEnum | SearchRunResultScalarFieldEnum[]
  }

  /**
   * SearchRunResult findMany
   */
  export type SearchRunResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter, which SearchRunResults to fetch.
     */
    where?: SearchRunResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchRunResults to fetch.
     */
    orderBy?: SearchRunResultOrderByWithRelationInput | SearchRunResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchRunResults.
     */
    cursor?: SearchRunResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchRunResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchRunResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchRunResults.
     */
    distinct?: SearchRunResultScalarFieldEnum | SearchRunResultScalarFieldEnum[]
  }

  /**
   * SearchRunResult create
   */
  export type SearchRunResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchRunResult.
     */
    data: XOR<SearchRunResultCreateInput, SearchRunResultUncheckedCreateInput>
  }

  /**
   * SearchRunResult createMany
   */
  export type SearchRunResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchRunResults.
     */
    data: SearchRunResultCreateManyInput | SearchRunResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchRunResult createManyAndReturn
   */
  export type SearchRunResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * The data used to create many SearchRunResults.
     */
    data: SearchRunResultCreateManyInput | SearchRunResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchRunResult update
   */
  export type SearchRunResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchRunResult.
     */
    data: XOR<SearchRunResultUpdateInput, SearchRunResultUncheckedUpdateInput>
    /**
     * Choose, which SearchRunResult to update.
     */
    where: SearchRunResultWhereUniqueInput
  }

  /**
   * SearchRunResult updateMany
   */
  export type SearchRunResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchRunResults.
     */
    data: XOR<SearchRunResultUpdateManyMutationInput, SearchRunResultUncheckedUpdateManyInput>
    /**
     * Filter which SearchRunResults to update
     */
    where?: SearchRunResultWhereInput
    /**
     * Limit how many SearchRunResults to update.
     */
    limit?: number
  }

  /**
   * SearchRunResult updateManyAndReturn
   */
  export type SearchRunResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * The data used to update SearchRunResults.
     */
    data: XOR<SearchRunResultUpdateManyMutationInput, SearchRunResultUncheckedUpdateManyInput>
    /**
     * Filter which SearchRunResults to update
     */
    where?: SearchRunResultWhereInput
    /**
     * Limit how many SearchRunResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchRunResult upsert
   */
  export type SearchRunResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchRunResult to update in case it exists.
     */
    where: SearchRunResultWhereUniqueInput
    /**
     * In case the SearchRunResult found by the `where` argument doesn't exist, create a new SearchRunResult with this data.
     */
    create: XOR<SearchRunResultCreateInput, SearchRunResultUncheckedCreateInput>
    /**
     * In case the SearchRunResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchRunResultUpdateInput, SearchRunResultUncheckedUpdateInput>
  }

  /**
   * SearchRunResult delete
   */
  export type SearchRunResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
    /**
     * Filter which SearchRunResult to delete.
     */
    where: SearchRunResultWhereUniqueInput
  }

  /**
   * SearchRunResult deleteMany
   */
  export type SearchRunResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchRunResults to delete
     */
    where?: SearchRunResultWhereInput
    /**
     * Limit how many SearchRunResults to delete.
     */
    limit?: number
  }

  /**
   * SearchRunResult without action
   */
  export type SearchRunResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchRunResult
     */
    select?: SearchRunResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchRunResult
     */
    omit?: SearchRunResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchRunResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    planTier: 'planTier',
    dailyApplyLimit: 'dailyApplyLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resumeUrl: 'resumeUrl',
    resumeText: 'resumeText',
    parsedProfile: 'parsedProfile',
    targetTitle: 'targetTitle',
    summary: 'summary',
    remoteOnly: 'remoteOnly',
    preferredLocations: 'preferredLocations',
    salaryExpectation: 'salaryExpectation',
    currency: 'currency',
    skills: 'skills',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    companyUrl: 'companyUrl',
    description: 'description',
    requirements: 'requirements',
    location: 'location',
    locationType: 'locationType',
    salary: 'salary',
    currency: 'currency',
    jobType: 'jobType',
    level: 'level',
    sourceUrl: 'sourceUrl',
    source: 'source',
    sourceDomain: 'sourceDomain',
    discoveryQuery: 'discoveryQuery',
    contentHash: 'contentHash',
    confidenceScore: 'confidenceScore',
    tags: 'tags',
    keywords: 'keywords',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt',
    publishedAt: 'publishedAt',
    scrapedAt: 'scrapedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    archivedAt: 'archivedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    status: 'status',
    clickedAt: 'clickedAt',
    appliedAt: 'appliedAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const SearchRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    querySet: 'querySet',
    profileSnapshot: 'profileSnapshot',
    resultLimit: 'resultLimit',
    fetchedCount: 'fetchedCount',
    rankedCount: 'rankedCount',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchRunScalarFieldEnum = (typeof SearchRunScalarFieldEnum)[keyof typeof SearchRunScalarFieldEnum]


  export const SearchRunResultScalarFieldEnum: {
    id: 'id',
    searchRunId: 'searchRunId',
    jobId: 'jobId',
    rank: 'rank',
    score: 'score',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type SearchRunResultScalarFieldEnum = (typeof SearchRunResultScalarFieldEnum)[keyof typeof SearchRunResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PlanTier'
   */
  export type EnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier'>
    


  /**
   * Reference to a field of type 'PlanTier[]'
   */
  export type ListEnumPlanTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanTier[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'SearchRunType'
   */
  export type EnumSearchRunTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchRunType'>
    


  /**
   * Reference to a field of type 'SearchRunType[]'
   */
  export type ListEnumSearchRunTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchRunType[]'>
    


  /**
   * Reference to a field of type 'SearchRunStatus'
   */
  export type EnumSearchRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchRunStatus'>
    


  /**
   * Reference to a field of type 'SearchRunStatus[]'
   */
  export type ListEnumSearchRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchRunStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    planTier?: EnumPlanTierFilter<"User"> | $Enums.PlanTier
    dailyApplyLimit?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    applications?: JobApplicationListRelationFilter
    searchRuns?: SearchRunListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    planTier?: SortOrder
    dailyApplyLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
    searchRuns?: SearchRunOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    planTier?: EnumPlanTierFilter<"User"> | $Enums.PlanTier
    dailyApplyLimit?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    applications?: JobApplicationListRelationFilter
    searchRuns?: SearchRunListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    planTier?: SortOrder
    dailyApplyLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    planTier?: EnumPlanTierWithAggregatesFilter<"User"> | $Enums.PlanTier
    dailyApplyLimit?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    resumeUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeText?: StringNullableFilter<"UserProfile"> | string | null
    parsedProfile?: JsonNullableFilter<"UserProfile">
    targetTitle?: StringNullableFilter<"UserProfile"> | string | null
    summary?: StringNullableFilter<"UserProfile"> | string | null
    remoteOnly?: BoolFilter<"UserProfile"> | boolean
    preferredLocations?: StringNullableListFilter<"UserProfile">
    salaryExpectation?: StringNullableFilter<"UserProfile"> | string | null
    currency?: StringNullableFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    keywords?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    resumeText?: SortOrderInput | SortOrder
    parsedProfile?: SortOrderInput | SortOrder
    targetTitle?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    remoteOnly?: SortOrder
    preferredLocations?: SortOrder
    salaryExpectation?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    skills?: SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    resumeUrl?: StringNullableFilter<"UserProfile"> | string | null
    resumeText?: StringNullableFilter<"UserProfile"> | string | null
    parsedProfile?: JsonNullableFilter<"UserProfile">
    targetTitle?: StringNullableFilter<"UserProfile"> | string | null
    summary?: StringNullableFilter<"UserProfile"> | string | null
    remoteOnly?: BoolFilter<"UserProfile"> | boolean
    preferredLocations?: StringNullableListFilter<"UserProfile">
    salaryExpectation?: StringNullableFilter<"UserProfile"> | string | null
    currency?: StringNullableFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    keywords?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    resumeText?: SortOrderInput | SortOrder
    parsedProfile?: SortOrderInput | SortOrder
    targetTitle?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    remoteOnly?: SortOrder
    preferredLocations?: SortOrder
    salaryExpectation?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    skills?: SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    resumeUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    resumeText?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    parsedProfile?: JsonNullableWithAggregatesFilter<"UserProfile">
    targetTitle?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    summary?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    remoteOnly?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    preferredLocations?: StringNullableListFilter<"UserProfile">
    salaryExpectation?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    currency?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    skills?: StringNullableListFilter<"UserProfile">
    keywords?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    companyUrl?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    requirements?: StringNullableFilter<"Job"> | string | null
    location?: StringNullableFilter<"Job"> | string | null
    locationType?: StringNullableFilter<"Job"> | string | null
    salary?: StringNullableFilter<"Job"> | string | null
    currency?: StringNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    level?: StringNullableFilter<"Job"> | string | null
    sourceUrl?: StringFilter<"Job"> | string
    source?: StringFilter<"Job"> | string
    sourceDomain?: StringNullableFilter<"Job"> | string | null
    discoveryQuery?: StringNullableFilter<"Job"> | string | null
    contentHash?: StringNullableFilter<"Job"> | string | null
    confidenceScore?: FloatNullableFilter<"Job"> | number | null
    tags?: StringNullableListFilter<"Job">
    keywords?: StringNullableFilter<"Job"> | string | null
    firstSeenAt?: DateTimeFilter<"Job"> | Date | string
    lastSeenAt?: DateTimeFilter<"Job"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    scrapedAt?: DateTimeFilter<"Job"> | Date | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    archivedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    applications?: JobApplicationListRelationFilter
    searchResults?: SearchRunResultListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    requirements?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    locationType?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sourceUrl?: SortOrder
    source?: SortOrder
    sourceDomain?: SortOrderInput | SortOrder
    discoveryQuery?: SortOrderInput | SortOrder
    contentHash?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    tags?: SortOrder
    keywords?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    applications?: JobApplicationOrderByRelationAggregateInput
    searchResults?: SearchRunResultOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceUrl?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    companyUrl?: StringNullableFilter<"Job"> | string | null
    description?: StringFilter<"Job"> | string
    requirements?: StringNullableFilter<"Job"> | string | null
    location?: StringNullableFilter<"Job"> | string | null
    locationType?: StringNullableFilter<"Job"> | string | null
    salary?: StringNullableFilter<"Job"> | string | null
    currency?: StringNullableFilter<"Job"> | string | null
    jobType?: StringNullableFilter<"Job"> | string | null
    level?: StringNullableFilter<"Job"> | string | null
    source?: StringFilter<"Job"> | string
    sourceDomain?: StringNullableFilter<"Job"> | string | null
    discoveryQuery?: StringNullableFilter<"Job"> | string | null
    contentHash?: StringNullableFilter<"Job"> | string | null
    confidenceScore?: FloatNullableFilter<"Job"> | number | null
    tags?: StringNullableListFilter<"Job">
    keywords?: StringNullableFilter<"Job"> | string | null
    firstSeenAt?: DateTimeFilter<"Job"> | Date | string
    lastSeenAt?: DateTimeFilter<"Job"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    scrapedAt?: DateTimeFilter<"Job"> | Date | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    archivedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    applications?: JobApplicationListRelationFilter
    searchResults?: SearchRunResultListRelationFilter
  }, "id" | "sourceUrl">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    requirements?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    locationType?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    jobType?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    sourceUrl?: SortOrder
    source?: SortOrder
    sourceDomain?: SortOrderInput | SortOrder
    discoveryQuery?: SortOrderInput | SortOrder
    contentHash?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    tags?: SortOrder
    keywords?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    company?: StringWithAggregatesFilter<"Job"> | string
    companyUrl?: StringNullableWithAggregatesFilter<"Job"> | string | null
    description?: StringWithAggregatesFilter<"Job"> | string
    requirements?: StringNullableWithAggregatesFilter<"Job"> | string | null
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null
    locationType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salary?: StringNullableWithAggregatesFilter<"Job"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobType?: StringNullableWithAggregatesFilter<"Job"> | string | null
    level?: StringNullableWithAggregatesFilter<"Job"> | string | null
    sourceUrl?: StringWithAggregatesFilter<"Job"> | string
    source?: StringWithAggregatesFilter<"Job"> | string
    sourceDomain?: StringNullableWithAggregatesFilter<"Job"> | string | null
    discoveryQuery?: StringNullableWithAggregatesFilter<"Job"> | string | null
    contentHash?: StringNullableWithAggregatesFilter<"Job"> | string | null
    confidenceScore?: FloatNullableWithAggregatesFilter<"Job"> | number | null
    tags?: StringNullableListFilter<"Job">
    keywords?: StringNullableWithAggregatesFilter<"Job"> | string | null
    firstSeenAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    scrapedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    archivedAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    userId?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    clickedAt?: DateTimeFilter<"JobApplication"> | Date | string
    appliedAt?: DateTimeNullableFilter<"JobApplication"> | Date | string | null
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    clickedAt?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_jobId?: JobApplicationUserIdJobIdCompoundUniqueInput
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    userId?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    clickedAt?: DateTimeFilter<"JobApplication"> | Date | string
    appliedAt?: DateTimeNullableFilter<"JobApplication"> | Date | string | null
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id" | "userId_jobId">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    clickedAt?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    userId?: StringWithAggregatesFilter<"JobApplication"> | string
    jobId?: StringWithAggregatesFilter<"JobApplication"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"JobApplication"> | $Enums.ApplicationStatus
    clickedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    appliedAt?: DateTimeNullableWithAggregatesFilter<"JobApplication"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type SearchRunWhereInput = {
    AND?: SearchRunWhereInput | SearchRunWhereInput[]
    OR?: SearchRunWhereInput[]
    NOT?: SearchRunWhereInput | SearchRunWhereInput[]
    id?: StringFilter<"SearchRun"> | string
    userId?: StringFilter<"SearchRun"> | string
    type?: EnumSearchRunTypeFilter<"SearchRun"> | $Enums.SearchRunType
    status?: EnumSearchRunStatusFilter<"SearchRun"> | $Enums.SearchRunStatus
    querySet?: StringNullableListFilter<"SearchRun">
    profileSnapshot?: JsonNullableFilter<"SearchRun">
    resultLimit?: IntFilter<"SearchRun"> | number
    fetchedCount?: IntFilter<"SearchRun"> | number
    rankedCount?: IntFilter<"SearchRun"> | number
    errorMessage?: StringNullableFilter<"SearchRun"> | string | null
    startedAt?: DateTimeFilter<"SearchRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"SearchRun"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchRun"> | Date | string
    updatedAt?: DateTimeFilter<"SearchRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    results?: SearchRunResultListRelationFilter
  }

  export type SearchRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    querySet?: SortOrder
    profileSnapshot?: SortOrderInput | SortOrder
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    results?: SearchRunResultOrderByRelationAggregateInput
  }

  export type SearchRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchRunWhereInput | SearchRunWhereInput[]
    OR?: SearchRunWhereInput[]
    NOT?: SearchRunWhereInput | SearchRunWhereInput[]
    userId?: StringFilter<"SearchRun"> | string
    type?: EnumSearchRunTypeFilter<"SearchRun"> | $Enums.SearchRunType
    status?: EnumSearchRunStatusFilter<"SearchRun"> | $Enums.SearchRunStatus
    querySet?: StringNullableListFilter<"SearchRun">
    profileSnapshot?: JsonNullableFilter<"SearchRun">
    resultLimit?: IntFilter<"SearchRun"> | number
    fetchedCount?: IntFilter<"SearchRun"> | number
    rankedCount?: IntFilter<"SearchRun"> | number
    errorMessage?: StringNullableFilter<"SearchRun"> | string | null
    startedAt?: DateTimeFilter<"SearchRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"SearchRun"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchRun"> | Date | string
    updatedAt?: DateTimeFilter<"SearchRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    results?: SearchRunResultListRelationFilter
  }, "id">

  export type SearchRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    querySet?: SortOrder
    profileSnapshot?: SortOrderInput | SortOrder
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchRunCountOrderByAggregateInput
    _avg?: SearchRunAvgOrderByAggregateInput
    _max?: SearchRunMaxOrderByAggregateInput
    _min?: SearchRunMinOrderByAggregateInput
    _sum?: SearchRunSumOrderByAggregateInput
  }

  export type SearchRunScalarWhereWithAggregatesInput = {
    AND?: SearchRunScalarWhereWithAggregatesInput | SearchRunScalarWhereWithAggregatesInput[]
    OR?: SearchRunScalarWhereWithAggregatesInput[]
    NOT?: SearchRunScalarWhereWithAggregatesInput | SearchRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchRun"> | string
    userId?: StringWithAggregatesFilter<"SearchRun"> | string
    type?: EnumSearchRunTypeWithAggregatesFilter<"SearchRun"> | $Enums.SearchRunType
    status?: EnumSearchRunStatusWithAggregatesFilter<"SearchRun"> | $Enums.SearchRunStatus
    querySet?: StringNullableListFilter<"SearchRun">
    profileSnapshot?: JsonNullableWithAggregatesFilter<"SearchRun">
    resultLimit?: IntWithAggregatesFilter<"SearchRun"> | number
    fetchedCount?: IntWithAggregatesFilter<"SearchRun"> | number
    rankedCount?: IntWithAggregatesFilter<"SearchRun"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"SearchRun"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"SearchRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SearchRun"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SearchRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchRun"> | Date | string
  }

  export type SearchRunResultWhereInput = {
    AND?: SearchRunResultWhereInput | SearchRunResultWhereInput[]
    OR?: SearchRunResultWhereInput[]
    NOT?: SearchRunResultWhereInput | SearchRunResultWhereInput[]
    id?: StringFilter<"SearchRunResult"> | string
    searchRunId?: StringFilter<"SearchRunResult"> | string
    jobId?: StringFilter<"SearchRunResult"> | string
    rank?: IntFilter<"SearchRunResult"> | number
    score?: FloatNullableFilter<"SearchRunResult"> | number | null
    reason?: StringNullableFilter<"SearchRunResult"> | string | null
    createdAt?: DateTimeFilter<"SearchRunResult"> | Date | string
    searchRun?: XOR<SearchRunScalarRelationFilter, SearchRunWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type SearchRunResultOrderByWithRelationInput = {
    id?: SortOrder
    searchRunId?: SortOrder
    jobId?: SortOrder
    rank?: SortOrder
    score?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    searchRun?: SearchRunOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type SearchRunResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    searchRunId_jobId?: SearchRunResultSearchRunIdJobIdCompoundUniqueInput
    searchRunId_rank?: SearchRunResultSearchRunIdRankCompoundUniqueInput
    AND?: SearchRunResultWhereInput | SearchRunResultWhereInput[]
    OR?: SearchRunResultWhereInput[]
    NOT?: SearchRunResultWhereInput | SearchRunResultWhereInput[]
    searchRunId?: StringFilter<"SearchRunResult"> | string
    jobId?: StringFilter<"SearchRunResult"> | string
    rank?: IntFilter<"SearchRunResult"> | number
    score?: FloatNullableFilter<"SearchRunResult"> | number | null
    reason?: StringNullableFilter<"SearchRunResult"> | string | null
    createdAt?: DateTimeFilter<"SearchRunResult"> | Date | string
    searchRun?: XOR<SearchRunScalarRelationFilter, SearchRunWhereInput>
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id" | "searchRunId_jobId" | "searchRunId_rank">

  export type SearchRunResultOrderByWithAggregationInput = {
    id?: SortOrder
    searchRunId?: SortOrder
    jobId?: SortOrder
    rank?: SortOrder
    score?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SearchRunResultCountOrderByAggregateInput
    _avg?: SearchRunResultAvgOrderByAggregateInput
    _max?: SearchRunResultMaxOrderByAggregateInput
    _min?: SearchRunResultMinOrderByAggregateInput
    _sum?: SearchRunResultSumOrderByAggregateInput
  }

  export type SearchRunResultScalarWhereWithAggregatesInput = {
    AND?: SearchRunResultScalarWhereWithAggregatesInput | SearchRunResultScalarWhereWithAggregatesInput[]
    OR?: SearchRunResultScalarWhereWithAggregatesInput[]
    NOT?: SearchRunResultScalarWhereWithAggregatesInput | SearchRunResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchRunResult"> | string
    searchRunId?: StringWithAggregatesFilter<"SearchRunResult"> | string
    jobId?: StringWithAggregatesFilter<"SearchRunResult"> | string
    rank?: IntWithAggregatesFilter<"SearchRunResult"> | number
    score?: FloatNullableWithAggregatesFilter<"SearchRunResult"> | number | null
    reason?: StringNullableWithAggregatesFilter<"SearchRunResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SearchRunResult"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    applications?: JobApplicationCreateNestedManyWithoutUserInput
    searchRuns?: SearchRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    searchRuns?: SearchRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    applications?: JobApplicationUpdateManyWithoutUserNestedInput
    searchRuns?: SearchRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    searchRuns?: SearchRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    resumeUrl?: string | null
    resumeText?: string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: string | null
    summary?: string | null
    remoteOnly?: boolean
    preferredLocations?: UserProfileCreatepreferredLocationsInput | string[]
    salaryExpectation?: string | null
    currency?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    resumeUrl?: string | null
    resumeText?: string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: string | null
    summary?: string | null
    remoteOnly?: boolean
    preferredLocations?: UserProfileCreatepreferredLocationsInput | string[]
    salaryExpectation?: string | null
    currency?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    resumeUrl?: string | null
    resumeText?: string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: string | null
    summary?: string | null
    remoteOnly?: boolean
    preferredLocations?: UserProfileCreatepreferredLocationsInput | string[]
    salaryExpectation?: string | null
    currency?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    applications?: JobApplicationCreateNestedManyWithoutJobInput
    searchResults?: SearchRunResultCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
    searchResults?: SearchRunResultUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
    searchResults?: SearchRunResultUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
    searchResults?: SearchRunResultUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobApplicationCreateInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunCreateInput = {
    id?: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSearchRunsInput
    results?: SearchRunResultCreateNestedManyWithoutSearchRunInput
  }

  export type SearchRunUncheckedCreateInput = {
    id?: string
    userId: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: SearchRunResultUncheckedCreateNestedManyWithoutSearchRunInput
  }

  export type SearchRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchRunsNestedInput
    results?: SearchRunResultUpdateManyWithoutSearchRunNestedInput
  }

  export type SearchRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: SearchRunResultUncheckedUpdateManyWithoutSearchRunNestedInput
  }

  export type SearchRunCreateManyInput = {
    id?: string
    userId: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultCreateInput = {
    id?: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
    searchRun: SearchRunCreateNestedOneWithoutResultsInput
    job: JobCreateNestedOneWithoutSearchResultsInput
  }

  export type SearchRunResultUncheckedCreateInput = {
    id?: string
    searchRunId: string
    jobId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type SearchRunResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRun?: SearchRunUpdateOneRequiredWithoutResultsNestedInput
    job?: JobUpdateOneRequiredWithoutSearchResultsNestedInput
  }

  export type SearchRunResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchRunId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultCreateManyInput = {
    id?: string
    searchRunId: string
    jobId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type SearchRunResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchRunId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type SearchRunListRelationFilter = {
    every?: SearchRunWhereInput
    some?: SearchRunWhereInput
    none?: SearchRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    planTier?: SortOrder
    dailyApplyLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    dailyApplyLimit?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    planTier?: SortOrder
    dailyApplyLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    planTier?: SortOrder
    dailyApplyLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    dailyApplyLimit?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    resumeText?: SortOrder
    parsedProfile?: SortOrder
    targetTitle?: SortOrder
    summary?: SortOrder
    remoteOnly?: SortOrder
    preferredLocations?: SortOrder
    salaryExpectation?: SortOrder
    currency?: SortOrder
    skills?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    resumeText?: SortOrder
    targetTitle?: SortOrder
    summary?: SortOrder
    remoteOnly?: SortOrder
    salaryExpectation?: SortOrder
    currency?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resumeUrl?: SortOrder
    resumeText?: SortOrder
    targetTitle?: SortOrder
    summary?: SortOrder
    remoteOnly?: SortOrder
    salaryExpectation?: SortOrder
    currency?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SearchRunResultListRelationFilter = {
    every?: SearchRunResultWhereInput
    some?: SearchRunResultWhereInput
    none?: SearchRunResultWhereInput
  }

  export type SearchRunResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyUrl?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    jobType?: SortOrder
    level?: SortOrder
    sourceUrl?: SortOrder
    source?: SortOrder
    sourceDomain?: SortOrder
    discoveryQuery?: SortOrder
    contentHash?: SortOrder
    confidenceScore?: SortOrder
    tags?: SortOrder
    keywords?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    publishedAt?: SortOrder
    scrapedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyUrl?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    jobType?: SortOrder
    level?: SortOrder
    sourceUrl?: SortOrder
    source?: SortOrder
    sourceDomain?: SortOrder
    discoveryQuery?: SortOrder
    contentHash?: SortOrder
    confidenceScore?: SortOrder
    keywords?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    publishedAt?: SortOrder
    scrapedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyUrl?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    salary?: SortOrder
    currency?: SortOrder
    jobType?: SortOrder
    level?: SortOrder
    sourceUrl?: SortOrder
    source?: SortOrder
    sourceDomain?: SortOrder
    discoveryQuery?: SortOrder
    contentHash?: SortOrder
    confidenceScore?: SortOrder
    keywords?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    publishedAt?: SortOrder
    scrapedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    archivedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type JobApplicationUserIdJobIdCompoundUniqueInput = {
    userId: string
    jobId: string
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    clickedAt?: SortOrder
    appliedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    clickedAt?: SortOrder
    appliedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    clickedAt?: SortOrder
    appliedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumSearchRunTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunType | EnumSearchRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunTypeFilter<$PrismaModel> | $Enums.SearchRunType
  }

  export type EnumSearchRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunStatus | EnumSearchRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunStatusFilter<$PrismaModel> | $Enums.SearchRunStatus
  }

  export type SearchRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    querySet?: SortOrder
    profileSnapshot?: SortOrder
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchRunAvgOrderByAggregateInput = {
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
  }

  export type SearchRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchRunSumOrderByAggregateInput = {
    resultLimit?: SortOrder
    fetchedCount?: SortOrder
    rankedCount?: SortOrder
  }

  export type EnumSearchRunTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunType | EnumSearchRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunTypeWithAggregatesFilter<$PrismaModel> | $Enums.SearchRunType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchRunTypeFilter<$PrismaModel>
    _max?: NestedEnumSearchRunTypeFilter<$PrismaModel>
  }

  export type EnumSearchRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunStatus | EnumSearchRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchRunStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchRunStatusFilter<$PrismaModel>
  }

  export type SearchRunScalarRelationFilter = {
    is?: SearchRunWhereInput
    isNot?: SearchRunWhereInput
  }

  export type SearchRunResultSearchRunIdJobIdCompoundUniqueInput = {
    searchRunId: string
    jobId: string
  }

  export type SearchRunResultSearchRunIdRankCompoundUniqueInput = {
    searchRunId: string
    rank: number
  }

  export type SearchRunResultCountOrderByAggregateInput = {
    id?: SortOrder
    searchRunId?: SortOrder
    jobId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchRunResultAvgOrderByAggregateInput = {
    rank?: SortOrder
    score?: SortOrder
  }

  export type SearchRunResultMaxOrderByAggregateInput = {
    id?: SortOrder
    searchRunId?: SortOrder
    jobId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchRunResultMinOrderByAggregateInput = {
    id?: SortOrder
    searchRunId?: SortOrder
    jobId?: SortOrder
    rank?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchRunResultSumOrderByAggregateInput = {
    rank?: SortOrder
    score?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SearchRunCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput> | SearchRunCreateWithoutUserInput[] | SearchRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchRunCreateOrConnectWithoutUserInput | SearchRunCreateOrConnectWithoutUserInput[]
    createMany?: SearchRunCreateManyUserInputEnvelope
    connect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SearchRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput> | SearchRunCreateWithoutUserInput[] | SearchRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchRunCreateOrConnectWithoutUserInput | SearchRunCreateOrConnectWithoutUserInput[]
    createMany?: SearchRunCreateManyUserInputEnvelope
    connect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPlanTierFieldUpdateOperationsInput = {
    set?: $Enums.PlanTier
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SearchRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput> | SearchRunCreateWithoutUserInput[] | SearchRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchRunCreateOrConnectWithoutUserInput | SearchRunCreateOrConnectWithoutUserInput[]
    upsert?: SearchRunUpsertWithWhereUniqueWithoutUserInput | SearchRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchRunCreateManyUserInputEnvelope
    set?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    disconnect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    delete?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    connect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    update?: SearchRunUpdateWithWhereUniqueWithoutUserInput | SearchRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchRunUpdateManyWithWhereWithoutUserInput | SearchRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchRunScalarWhereInput | SearchRunScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput> | JobApplicationCreateWithoutUserInput[] | JobApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutUserInput | JobApplicationCreateOrConnectWithoutUserInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutUserInput | JobApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobApplicationCreateManyUserInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutUserInput | JobApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutUserInput | JobApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SearchRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput> | SearchRunCreateWithoutUserInput[] | SearchRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchRunCreateOrConnectWithoutUserInput | SearchRunCreateOrConnectWithoutUserInput[]
    upsert?: SearchRunUpsertWithWhereUniqueWithoutUserInput | SearchRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchRunCreateManyUserInputEnvelope
    set?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    disconnect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    delete?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    connect?: SearchRunWhereUniqueInput | SearchRunWhereUniqueInput[]
    update?: SearchRunUpdateWithWhereUniqueWithoutUserInput | SearchRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchRunUpdateManyWithWhereWithoutUserInput | SearchRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchRunScalarWhereInput | SearchRunScalarWhereInput[]
  }

  export type UserProfileCreatepreferredLocationsInput = {
    set: string[]
  }

  export type UserProfileCreateskillsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserProfileUpdatepreferredLocationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type JobCreatetagsInput = {
    set: string[]
  }

  export type JobApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SearchRunResultCreateNestedManyWithoutJobInput = {
    create?: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput> | SearchRunResultCreateWithoutJobInput[] | SearchRunResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutJobInput | SearchRunResultCreateOrConnectWithoutJobInput[]
    createMany?: SearchRunResultCreateManyJobInputEnvelope
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SearchRunResultUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput> | SearchRunResultCreateWithoutJobInput[] | SearchRunResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutJobInput | SearchRunResultCreateOrConnectWithoutJobInput[]
    createMany?: SearchRunResultCreateManyJobInputEnvelope
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JobApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SearchRunResultUpdateManyWithoutJobNestedInput = {
    create?: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput> | SearchRunResultCreateWithoutJobInput[] | SearchRunResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutJobInput | SearchRunResultCreateOrConnectWithoutJobInput[]
    upsert?: SearchRunResultUpsertWithWhereUniqueWithoutJobInput | SearchRunResultUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: SearchRunResultCreateManyJobInputEnvelope
    set?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    disconnect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    delete?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    update?: SearchRunResultUpdateWithWhereUniqueWithoutJobInput | SearchRunResultUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: SearchRunResultUpdateManyWithWhereWithoutJobInput | SearchRunResultUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SearchRunResultUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput> | SearchRunResultCreateWithoutJobInput[] | SearchRunResultUncheckedCreateWithoutJobInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutJobInput | SearchRunResultCreateOrConnectWithoutJobInput[]
    upsert?: SearchRunResultUpsertWithWhereUniqueWithoutJobInput | SearchRunResultUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: SearchRunResultCreateManyJobInputEnvelope
    set?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    disconnect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    delete?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    update?: SearchRunResultUpdateWithWhereUniqueWithoutJobInput | SearchRunResultUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: SearchRunResultUpdateManyWithWhereWithoutJobInput | SearchRunResultUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type SearchRunCreatequerySetInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSearchRunsInput = {
    create?: XOR<UserCreateWithoutSearchRunsInput, UserUncheckedCreateWithoutSearchRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchRunsInput
    connect?: UserWhereUniqueInput
  }

  export type SearchRunResultCreateNestedManyWithoutSearchRunInput = {
    create?: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput> | SearchRunResultCreateWithoutSearchRunInput[] | SearchRunResultUncheckedCreateWithoutSearchRunInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutSearchRunInput | SearchRunResultCreateOrConnectWithoutSearchRunInput[]
    createMany?: SearchRunResultCreateManySearchRunInputEnvelope
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
  }

  export type SearchRunResultUncheckedCreateNestedManyWithoutSearchRunInput = {
    create?: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput> | SearchRunResultCreateWithoutSearchRunInput[] | SearchRunResultUncheckedCreateWithoutSearchRunInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutSearchRunInput | SearchRunResultCreateOrConnectWithoutSearchRunInput[]
    createMany?: SearchRunResultCreateManySearchRunInputEnvelope
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
  }

  export type EnumSearchRunTypeFieldUpdateOperationsInput = {
    set?: $Enums.SearchRunType
  }

  export type EnumSearchRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.SearchRunStatus
  }

  export type SearchRunUpdatequerySetInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSearchRunsNestedInput = {
    create?: XOR<UserCreateWithoutSearchRunsInput, UserUncheckedCreateWithoutSearchRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchRunsInput
    upsert?: UserUpsertWithoutSearchRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchRunsInput, UserUpdateWithoutSearchRunsInput>, UserUncheckedUpdateWithoutSearchRunsInput>
  }

  export type SearchRunResultUpdateManyWithoutSearchRunNestedInput = {
    create?: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput> | SearchRunResultCreateWithoutSearchRunInput[] | SearchRunResultUncheckedCreateWithoutSearchRunInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutSearchRunInput | SearchRunResultCreateOrConnectWithoutSearchRunInput[]
    upsert?: SearchRunResultUpsertWithWhereUniqueWithoutSearchRunInput | SearchRunResultUpsertWithWhereUniqueWithoutSearchRunInput[]
    createMany?: SearchRunResultCreateManySearchRunInputEnvelope
    set?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    disconnect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    delete?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    update?: SearchRunResultUpdateWithWhereUniqueWithoutSearchRunInput | SearchRunResultUpdateWithWhereUniqueWithoutSearchRunInput[]
    updateMany?: SearchRunResultUpdateManyWithWhereWithoutSearchRunInput | SearchRunResultUpdateManyWithWhereWithoutSearchRunInput[]
    deleteMany?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
  }

  export type SearchRunResultUncheckedUpdateManyWithoutSearchRunNestedInput = {
    create?: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput> | SearchRunResultCreateWithoutSearchRunInput[] | SearchRunResultUncheckedCreateWithoutSearchRunInput[]
    connectOrCreate?: SearchRunResultCreateOrConnectWithoutSearchRunInput | SearchRunResultCreateOrConnectWithoutSearchRunInput[]
    upsert?: SearchRunResultUpsertWithWhereUniqueWithoutSearchRunInput | SearchRunResultUpsertWithWhereUniqueWithoutSearchRunInput[]
    createMany?: SearchRunResultCreateManySearchRunInputEnvelope
    set?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    disconnect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    delete?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    connect?: SearchRunResultWhereUniqueInput | SearchRunResultWhereUniqueInput[]
    update?: SearchRunResultUpdateWithWhereUniqueWithoutSearchRunInput | SearchRunResultUpdateWithWhereUniqueWithoutSearchRunInput[]
    updateMany?: SearchRunResultUpdateManyWithWhereWithoutSearchRunInput | SearchRunResultUpdateManyWithWhereWithoutSearchRunInput[]
    deleteMany?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
  }

  export type SearchRunCreateNestedOneWithoutResultsInput = {
    create?: XOR<SearchRunCreateWithoutResultsInput, SearchRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: SearchRunCreateOrConnectWithoutResultsInput
    connect?: SearchRunWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutSearchResultsInput = {
    create?: XOR<JobCreateWithoutSearchResultsInput, JobUncheckedCreateWithoutSearchResultsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSearchResultsInput
    connect?: JobWhereUniqueInput
  }

  export type SearchRunUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<SearchRunCreateWithoutResultsInput, SearchRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: SearchRunCreateOrConnectWithoutResultsInput
    upsert?: SearchRunUpsertWithoutResultsInput
    connect?: SearchRunWhereUniqueInput
    update?: XOR<XOR<SearchRunUpdateToOneWithWhereWithoutResultsInput, SearchRunUpdateWithoutResultsInput>, SearchRunUncheckedUpdateWithoutResultsInput>
  }

  export type JobUpdateOneRequiredWithoutSearchResultsNestedInput = {
    create?: XOR<JobCreateWithoutSearchResultsInput, JobUncheckedCreateWithoutSearchResultsInput>
    connectOrCreate?: JobCreateOrConnectWithoutSearchResultsInput
    upsert?: JobUpsertWithoutSearchResultsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutSearchResultsInput, JobUpdateWithoutSearchResultsInput>, JobUncheckedUpdateWithoutSearchResultsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPlanTierFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierFilter<$PrismaModel> | $Enums.PlanTier
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPlanTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanTier | EnumPlanTierFieldRefInput<$PrismaModel>
    in?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanTier[] | ListEnumPlanTierFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTierWithAggregatesFilter<$PrismaModel> | $Enums.PlanTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTierFilter<$PrismaModel>
    _max?: NestedEnumPlanTierFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumSearchRunTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunType | EnumSearchRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunTypeFilter<$PrismaModel> | $Enums.SearchRunType
  }

  export type NestedEnumSearchRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunStatus | EnumSearchRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunStatusFilter<$PrismaModel> | $Enums.SearchRunStatus
  }

  export type NestedEnumSearchRunTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunType | EnumSearchRunTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunType[] | ListEnumSearchRunTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunTypeWithAggregatesFilter<$PrismaModel> | $Enums.SearchRunType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchRunTypeFilter<$PrismaModel>
    _max?: NestedEnumSearchRunTypeFilter<$PrismaModel>
  }

  export type NestedEnumSearchRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchRunStatus | EnumSearchRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchRunStatus[] | ListEnumSearchRunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchRunStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchRunStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    resumeUrl?: string | null
    resumeText?: string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: string | null
    summary?: string | null
    remoteOnly?: boolean
    preferredLocations?: UserProfileCreatepreferredLocationsInput | string[]
    salaryExpectation?: string | null
    currency?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    resumeUrl?: string | null
    resumeText?: string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: string | null
    summary?: string | null
    remoteOnly?: boolean
    preferredLocations?: UserProfileCreatepreferredLocationsInput | string[]
    salaryExpectation?: string | null
    currency?: string | null
    skills?: UserProfileCreateskillsInput | string[]
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationCreateManyUserInputEnvelope = {
    data: JobApplicationCreateManyUserInput | JobApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SearchRunCreateWithoutUserInput = {
    id?: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: SearchRunResultCreateNestedManyWithoutSearchRunInput
  }

  export type SearchRunUncheckedCreateWithoutUserInput = {
    id?: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: SearchRunResultUncheckedCreateNestedManyWithoutSearchRunInput
  }

  export type SearchRunCreateOrConnectWithoutUserInput = {
    where: SearchRunWhereUniqueInput
    create: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput>
  }

  export type SearchRunCreateManyUserInputEnvelope = {
    data: SearchRunCreateManyUserInput | SearchRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedProfile?: NullableJsonNullValueInput | InputJsonValue
    targetTitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    remoteOnly?: BoolFieldUpdateOperationsInput | boolean
    preferredLocations?: UserProfileUpdatepreferredLocationsInput | string[]
    salaryExpectation?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserProfileUpdateskillsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<JobApplicationCreateWithoutUserInput, JobApplicationUncheckedCreateWithoutUserInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutUserInput, JobApplicationUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutUserInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    userId?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    clickedAt?: DateTimeFilter<"JobApplication"> | Date | string
    appliedAt?: DateTimeNullableFilter<"JobApplication"> | Date | string | null
    notes?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type SearchRunUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchRunWhereUniqueInput
    update: XOR<SearchRunUpdateWithoutUserInput, SearchRunUncheckedUpdateWithoutUserInput>
    create: XOR<SearchRunCreateWithoutUserInput, SearchRunUncheckedCreateWithoutUserInput>
  }

  export type SearchRunUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchRunWhereUniqueInput
    data: XOR<SearchRunUpdateWithoutUserInput, SearchRunUncheckedUpdateWithoutUserInput>
  }

  export type SearchRunUpdateManyWithWhereWithoutUserInput = {
    where: SearchRunScalarWhereInput
    data: XOR<SearchRunUpdateManyMutationInput, SearchRunUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchRunScalarWhereInput = {
    AND?: SearchRunScalarWhereInput | SearchRunScalarWhereInput[]
    OR?: SearchRunScalarWhereInput[]
    NOT?: SearchRunScalarWhereInput | SearchRunScalarWhereInput[]
    id?: StringFilter<"SearchRun"> | string
    userId?: StringFilter<"SearchRun"> | string
    type?: EnumSearchRunTypeFilter<"SearchRun"> | $Enums.SearchRunType
    status?: EnumSearchRunStatusFilter<"SearchRun"> | $Enums.SearchRunStatus
    querySet?: StringNullableListFilter<"SearchRun">
    profileSnapshot?: JsonNullableFilter<"SearchRun">
    resultLimit?: IntFilter<"SearchRun"> | number
    fetchedCount?: IntFilter<"SearchRun"> | number
    rankedCount?: IntFilter<"SearchRun"> | number
    errorMessage?: StringNullableFilter<"SearchRun"> | string | null
    startedAt?: DateTimeFilter<"SearchRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"SearchRun"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchRun"> | Date | string
    updatedAt?: DateTimeFilter<"SearchRun"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutUserInput
    searchRuns?: SearchRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
    searchRuns?: SearchRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutUserNestedInput
    searchRuns?: SearchRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
    searchRuns?: SearchRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobApplicationCreateWithoutJobInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationCreateManyJobInputEnvelope = {
    data: JobApplicationCreateManyJobInput | JobApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type SearchRunResultCreateWithoutJobInput = {
    id?: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
    searchRun: SearchRunCreateNestedOneWithoutResultsInput
  }

  export type SearchRunResultUncheckedCreateWithoutJobInput = {
    id?: string
    searchRunId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type SearchRunResultCreateOrConnectWithoutJobInput = {
    where: SearchRunResultWhereUniqueInput
    create: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput>
  }

  export type SearchRunResultCreateManyJobInputEnvelope = {
    data: SearchRunResultCreateManyJobInput | SearchRunResultCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type SearchRunResultUpsertWithWhereUniqueWithoutJobInput = {
    where: SearchRunResultWhereUniqueInput
    update: XOR<SearchRunResultUpdateWithoutJobInput, SearchRunResultUncheckedUpdateWithoutJobInput>
    create: XOR<SearchRunResultCreateWithoutJobInput, SearchRunResultUncheckedCreateWithoutJobInput>
  }

  export type SearchRunResultUpdateWithWhereUniqueWithoutJobInput = {
    where: SearchRunResultWhereUniqueInput
    data: XOR<SearchRunResultUpdateWithoutJobInput, SearchRunResultUncheckedUpdateWithoutJobInput>
  }

  export type SearchRunResultUpdateManyWithWhereWithoutJobInput = {
    where: SearchRunResultScalarWhereInput
    data: XOR<SearchRunResultUpdateManyMutationInput, SearchRunResultUncheckedUpdateManyWithoutJobInput>
  }

  export type SearchRunResultScalarWhereInput = {
    AND?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
    OR?: SearchRunResultScalarWhereInput[]
    NOT?: SearchRunResultScalarWhereInput | SearchRunResultScalarWhereInput[]
    id?: StringFilter<"SearchRunResult"> | string
    searchRunId?: StringFilter<"SearchRunResult"> | string
    jobId?: StringFilter<"SearchRunResult"> | string
    rank?: IntFilter<"SearchRunResult"> | number
    score?: FloatNullableFilter<"SearchRunResult"> | number | null
    reason?: StringNullableFilter<"SearchRunResult"> | string | null
    createdAt?: DateTimeFilter<"SearchRunResult"> | Date | string
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    searchRuns?: SearchRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    searchRuns?: SearchRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    searchResults?: SearchRunResultCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    searchResults?: SearchRunResultUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    searchRuns?: SearchRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    searchRuns?: SearchRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    searchResults?: SearchRunResultUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    searchResults?: SearchRunResultUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserCreateWithoutSearchRunsInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    applications?: JobApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchRunsInput = {
    id?: string
    email: string
    fullName?: string | null
    planTier?: $Enums.PlanTier
    dailyApplyLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: JobApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchRunsInput, UserUncheckedCreateWithoutSearchRunsInput>
  }

  export type SearchRunResultCreateWithoutSearchRunInput = {
    id?: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutSearchResultsInput
  }

  export type SearchRunResultUncheckedCreateWithoutSearchRunInput = {
    id?: string
    jobId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type SearchRunResultCreateOrConnectWithoutSearchRunInput = {
    where: SearchRunResultWhereUniqueInput
    create: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput>
  }

  export type SearchRunResultCreateManySearchRunInputEnvelope = {
    data: SearchRunResultCreateManySearchRunInput | SearchRunResultCreateManySearchRunInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSearchRunsInput = {
    update: XOR<UserUpdateWithoutSearchRunsInput, UserUncheckedUpdateWithoutSearchRunsInput>
    create: XOR<UserCreateWithoutSearchRunsInput, UserUncheckedCreateWithoutSearchRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchRunsInput, UserUncheckedUpdateWithoutSearchRunsInput>
  }

  export type UserUpdateWithoutSearchRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    applications?: JobApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    planTier?: EnumPlanTierFieldUpdateOperationsInput | $Enums.PlanTier
    dailyApplyLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: JobApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SearchRunResultUpsertWithWhereUniqueWithoutSearchRunInput = {
    where: SearchRunResultWhereUniqueInput
    update: XOR<SearchRunResultUpdateWithoutSearchRunInput, SearchRunResultUncheckedUpdateWithoutSearchRunInput>
    create: XOR<SearchRunResultCreateWithoutSearchRunInput, SearchRunResultUncheckedCreateWithoutSearchRunInput>
  }

  export type SearchRunResultUpdateWithWhereUniqueWithoutSearchRunInput = {
    where: SearchRunResultWhereUniqueInput
    data: XOR<SearchRunResultUpdateWithoutSearchRunInput, SearchRunResultUncheckedUpdateWithoutSearchRunInput>
  }

  export type SearchRunResultUpdateManyWithWhereWithoutSearchRunInput = {
    where: SearchRunResultScalarWhereInput
    data: XOR<SearchRunResultUpdateManyMutationInput, SearchRunResultUncheckedUpdateManyWithoutSearchRunInput>
  }

  export type SearchRunCreateWithoutResultsInput = {
    id?: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSearchRunsInput
  }

  export type SearchRunUncheckedCreateWithoutResultsInput = {
    id?: string
    userId: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchRunCreateOrConnectWithoutResultsInput = {
    where: SearchRunWhereUniqueInput
    create: XOR<SearchRunCreateWithoutResultsInput, SearchRunUncheckedCreateWithoutResultsInput>
  }

  export type JobCreateWithoutSearchResultsInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    applications?: JobApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSearchResultsInput = {
    id?: string
    title: string
    company: string
    companyUrl?: string | null
    description: string
    requirements?: string | null
    location?: string | null
    locationType?: string | null
    salary?: string | null
    currency?: string | null
    jobType?: string | null
    level?: string | null
    sourceUrl: string
    source: string
    sourceDomain?: string | null
    discoveryQuery?: string | null
    contentHash?: string | null
    confidenceScore?: number | null
    tags?: JobCreatetagsInput | string[]
    keywords?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    publishedAt?: Date | string | null
    scrapedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    archivedAt?: Date | string | null
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSearchResultsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSearchResultsInput, JobUncheckedCreateWithoutSearchResultsInput>
  }

  export type SearchRunUpsertWithoutResultsInput = {
    update: XOR<SearchRunUpdateWithoutResultsInput, SearchRunUncheckedUpdateWithoutResultsInput>
    create: XOR<SearchRunCreateWithoutResultsInput, SearchRunUncheckedCreateWithoutResultsInput>
    where?: SearchRunWhereInput
  }

  export type SearchRunUpdateToOneWithWhereWithoutResultsInput = {
    where?: SearchRunWhereInput
    data: XOR<SearchRunUpdateWithoutResultsInput, SearchRunUncheckedUpdateWithoutResultsInput>
  }

  export type SearchRunUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchRunsNestedInput
  }

  export type SearchRunUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUpsertWithoutSearchResultsInput = {
    update: XOR<JobUpdateWithoutSearchResultsInput, JobUncheckedUpdateWithoutSearchResultsInput>
    create: XOR<JobCreateWithoutSearchResultsInput, JobUncheckedCreateWithoutSearchResultsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutSearchResultsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutSearchResultsInput, JobUncheckedUpdateWithoutSearchResultsInput>
  }

  export type JobUpdateWithoutSearchResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSearchResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceDomain?: NullableStringFieldUpdateOperationsInput | string | null
    discoveryQuery?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: JobUpdatetagsInput | string[]
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobApplicationCreateManyUserInput = {
    id?: string
    jobId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchRunCreateManyUserInput = {
    id?: string
    type?: $Enums.SearchRunType
    status?: $Enums.SearchRunStatus
    querySet?: SearchRunCreatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: number
    fetchedCount?: number
    rankedCount?: number
    errorMessage?: string | null
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: SearchRunResultUpdateManyWithoutSearchRunNestedInput
  }

  export type SearchRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: SearchRunResultUncheckedUpdateManyWithoutSearchRunNestedInput
  }

  export type SearchRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSearchRunTypeFieldUpdateOperationsInput | $Enums.SearchRunType
    status?: EnumSearchRunStatusFieldUpdateOperationsInput | $Enums.SearchRunStatus
    querySet?: SearchRunUpdatequerySetInput | string[]
    profileSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultLimit?: IntFieldUpdateOperationsInput | number
    fetchedCount?: IntFieldUpdateOperationsInput | number
    rankedCount?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobInput = {
    id?: string
    userId: string
    status?: $Enums.ApplicationStatus
    clickedAt?: Date | string
    appliedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchRunResultCreateManyJobInput = {
    id?: string
    searchRunId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRun?: SearchRunUpdateOneRequiredWithoutResultsNestedInput
  }

  export type SearchRunResultUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchRunId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchRunId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultCreateManySearchRunInput = {
    id?: string
    jobId: string
    rank: number
    score?: number | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type SearchRunResultUpdateWithoutSearchRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutSearchResultsNestedInput
  }

  export type SearchRunResultUncheckedUpdateWithoutSearchRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchRunResultUncheckedUpdateManyWithoutSearchRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}