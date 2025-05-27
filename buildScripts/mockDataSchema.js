const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            unique: true,
            minimum: 1,
            maximum: 700,
          },
          firstName: {
            type: 'string',
            faker: 'person.firstName',
          },
          lastName: {
            type: 'string',
            faker: 'person.lastName',
          },
          email: {
            type: 'string',
            faker: 'internet.email',
          },
        },
        required: ['id', 'firstName', 'lastName', 'email'],
      },
    },
  },
  required: ['users'],
}

export { schema }
