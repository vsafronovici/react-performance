export const createNamespace = (prefix, keys) => (
  Object.keys(keys).reduce((newKeys, key) => {
    newKeys[key] = prefix ? `${prefix}.${key}` : `${key}`
    return newKeys
  }, {})
)

export const createEnum = keys => createNamespace(undefined, keys)

