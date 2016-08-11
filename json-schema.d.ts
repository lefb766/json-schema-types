declare module 'json-schema-types' {
    interface Core {
        id?: string;
        $schema?: string;
        $ref?: string;
    }

    interface HasMetadata {
        title?: string;
        description?: string;
        default?: any;
    }

    type PrimitiveType = 'array' | 'boolean' | 'integer' | 'number' | 'null' | 'object' | 'string';

    interface ValidationBase extends Core, HasMetadata {
        enum?: any[];
        type?: PrimitiveType | PrimitiveType[];
        allOf?: JsonSchema[];
        anyOf?: JsonSchema[];
        oneOf?: JsonSchema[];
        not?: JsonSchema;
        definitions?: { [key: string]: JsonSchema };
    }

    interface Numeric {
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: boolean;
        minimum?: number;
        exclusiveMinimum?:  boolean;
    }

    interface String {
        maxLength?: number;
        minLength?: number;
        pattern?: string;
        format?: string;
    }

    interface Array {
        additionalItems?: boolean | JsonSchema;
        items?: JsonSchema | JsonSchema[];
        maxItems?: number;
        minItems?: number;
        uniqueItems?: boolean;
    }

    interface Object {
        maxProperties?: number;
        minProperties?: number;
        required?: string[];
        additionalProperties?: boolean | JsonSchema;
        properties?: { [key: string]: JsonSchema };
        patternProperties?: { [regex: string]: JsonSchema };
        dependencies?: {
            [prop: string]: JsonSchema | string[];
        }
    }

    interface JsonSchema extends ValidationBase, Numeric, String, Array, Object {
    }

    export default JsonSchema;
}
