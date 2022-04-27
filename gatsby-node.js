exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    enabled: Joi.boolean().default(true).description(`Enables click-to-react-component`),
  })
}