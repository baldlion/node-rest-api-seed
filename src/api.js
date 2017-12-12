import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import expresstful from 'expresstful'
import db from '@/db'
import * as resources from '@/resources'

const env = process.env.NODE_ENV || 'development'
const api = express()

api.use(morgan(env === 'production' ? 'combined' : 'dev'))
api.use(bodyParser.urlencoded({extended: false}))
api.use(bodyParser.json())
api.use(expresstful(resources))

export default api
