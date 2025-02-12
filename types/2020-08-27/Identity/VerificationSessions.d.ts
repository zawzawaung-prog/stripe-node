// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      /**
       * The VerificationSession object.
       */
      interface VerificationSession {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'identity.verification_session';

        /**
         * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don't store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
         */
        client_secret: string | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If present, this property tells you the last error encountered when processing the verification.
         */
        last_error: VerificationSession.LastError | null;

        /**
         * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-checks)
         */
        last_verification_report:
          | string
          | Stripe.Identity.VerificationReport
          | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        options: VerificationSession.Options;

        /**
         * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
         */
        redaction: VerificationSession.Redaction | null;

        /**
         * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
         */
        status: VerificationSession.Status;

        /**
         * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
         */
        type: VerificationSession.Type;

        /**
         * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 24 hours and can only be used once. Don't store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
         */
        url: string | null;

        /**
         * The user's verified data.
         */
        verified_outputs: VerificationSession.VerifiedOutputs | null;
      }

      namespace VerificationSession {
        interface LastError {
          /**
           * A short machine-readable string giving the reason for the verification or user-session failure.
           */
          code: LastError.Code | null;

          /**
           * A message that explains the reason for verification or user-session failure.
           */
          reason: string | null;
        }

        namespace LastError {
          type Code =
            | 'abandoned'
            | 'consent_declined'
            | 'country_not_supported'
            | 'device_not_supported'
            | 'document_expired'
            | 'document_type_not_supported'
            | 'document_unverified_other'
            | 'id_number_insufficient_document_data'
            | 'id_number_mismatch'
            | 'id_number_unverified_other'
            | 'selfie_document_missing_photo'
            | 'selfie_face_mismatch'
            | 'selfie_manipulated'
            | 'selfie_unverified_other'
            | 'under_supported_age';
        }

        interface Options {
          document?: Options.Document;

          id_number?: Options.IdNumber;
        }

        namespace Options {
          interface Document {
            /**
             * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
             */
            require_id_number?: boolean;

            /**
             * Disable image uploads, identity document images have to be captured using the device's camera.
             */
            require_live_capture?: boolean;

            /**
             * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }

          interface IdNumber {}
        }

        interface Redaction {
          /**
           * Indicates whether this object and its related objects have been redacted or not.
           */
          status: Redaction.Status;
        }

        namespace Redaction {
          type Status = 'processing' | 'redacted';
        }

        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';

        type Type = 'document' | 'id_number';

        interface VerifiedOutputs {
          /**
           * The user's verified address.
           */
          address: Stripe.Address | null;

          /**
           * The user's verified date of birth.
           */
          dob: VerifiedOutputs.Dob | null;

          /**
           * The user's verified first name.
           */
          first_name: string | null;

          /**
           * The user's verified id number.
           */
          id_number: string | null;

          /**
           * The user's verified id number type.
           */
          id_number_type: VerifiedOutputs.IdNumberType | null;

          /**
           * The user's verified last name.
           */
          last_name: string | null;
        }

        namespace VerifiedOutputs {
          interface Dob {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';
        }
      }

      interface VerificationSessionCreateParams {
        /**
         * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
         */
        type: VerificationSessionCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A set of options for the session's verification checks.
         */
        options?: VerificationSessionCreateParams.Options;

        /**
         * The URL that the user will be redirected to upon completing the verification flow.
         */
        return_url?: string;
      }

      namespace VerificationSessionCreateParams {
        interface Options {
          /**
           * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
           */
          document?: Stripe.Emptyable<Options.Document>;
        }

        namespace Options {
          interface Document {
            /**
             * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
             */
            require_id_number?: boolean;

            /**
             * Disable image uploads, identity document images have to be captured using the device's camera.
             */
            require_live_capture?: boolean;

            /**
             * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }
        }

        type Type = 'document' | 'id_number';
      }

      interface VerificationSessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface VerificationSessionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A set of options for the session's verification checks.
         */
        options?: VerificationSessionUpdateParams.Options;

        /**
         * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
         */
        type?: VerificationSessionUpdateParams.Type;
      }

      namespace VerificationSessionUpdateParams {
        interface Options {
          /**
           * Options that apply to the [document check](https://stripe.com/docs/identity/verification-checks?type=document).
           */
          document?: Stripe.Emptyable<Options.Document>;
        }

        namespace Options {
          interface Document {
            /**
             * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
             */
            require_id_number?: boolean;

            /**
             * Disable image uploads, identity document images have to be captured using the device's camera.
             */
            require_live_capture?: boolean;

            /**
             * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }
        }

        type Type = 'document' | 'id_number';
      }

      interface VerificationSessionListParams extends PaginationParams {
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
         */
        status?: VerificationSessionListParams.Status;
      }

      namespace VerificationSessionListParams {
        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';
      }

      interface VerificationSessionCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface VerificationSessionRedactParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class VerificationSessionsResource {
        /**
         * Creates a VerificationSession object.
         *
         * After the VerificationSession is created, display a verification modal using the session client_secret or send your users to the session's url.
         *
         * If your API key is in test mode, verification checks won't actually process, though everything else will occur as if in live mode.
         *
         * Related guide: [Verify your users' identity documents](https://stripe.com/docs/identity/verify-identity-documents).
         */
        create(
          params: VerificationSessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Retrieves the details of a VerificationSession that was previously created.
         *
         * When the session status is requires_input, you can use this method to retrieve a valid
         * client_secret or url to allow re-submission.
         */
        retrieve(
          id: string,
          params?: VerificationSessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Updates a VerificationSession object.
         *
         * When the session status is requires_input, you can use this method to update the
         * verification check and options.
         */
        update(
          id: string,
          params?: VerificationSessionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Returns a list of VerificationSessions
         */
        list(
          params?: VerificationSessionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.VerificationSession>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.VerificationSession>;

        /**
         * A VerificationSession object can be canceled when it is in requires_input [status](https://stripe.com/docs/identity/how-sessions-work).
         *
         * Once canceled, future submission attempts are disabled. This cannot be undone. [Learn more](https://stripe.com/docs/identity/verification-sessions#cancel).
         */
        cancel(
          id: string,
          params?: VerificationSessionCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;

        /**
         * Redact a VerificationSession to remove all collected information from Stripe. This will redact
         * the VerificationSession and all objects related to it, including VerificationReports, Events,
         * request logs, etc.
         *
         * A VerificationSession object can be redacted when it is in requires_input or verified
         * [status](https://stripe.com/docs/identity/how-sessions-work). Redacting a VerificationSession in requires_action
         * state will automatically cancel it.
         *
         * The redaction process may take up to four days. When the redaction process is in progress, the
         * VerificationSession's redaction.status field will be set to processing; when the process is
         * finished, it will change to redacted and an identity.verification_session.redacted event
         * will be emitted.
         *
         * Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
         * fields that contain personal data will be replaced by the string [redacted] or a similar
         * placeholder. The metadata field will also be erased. Redacted objects cannot be updated or
         * used for any purpose.
         *
         * [Learn more](https://stripe.com/docs/identity/verification-sessions#redact).
         */
        redact(
          id: string,
          params?: VerificationSessionRedactParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
        redact(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.VerificationSession>>;
      }
    }
  }
}
