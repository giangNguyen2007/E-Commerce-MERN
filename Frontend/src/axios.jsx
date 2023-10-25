import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/"
// const BASE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjhmMjhlYzNkNWE2ODFiMjFlMTBjZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTcxOTEyNDQsImV4cCI6MTY5NzQ1MDQ0NH0.FC5ySOkoOLaYzBb3oLN3Wd5J-T770oC4AmA9JAn_JHQ'
// const ADMIN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjkyZGE2MTBhNjVmYjgzMjJmYmRmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzE5Nzg1MCwiZXhwIjoxNjk3NDU3MDUwfQ.lgtKvMYHrq_y7TqGWKe7HPcvZXaPaHOYAJww2e9UV3o'

export const adminRequest = axios.create({
    baseURL: BASE_URL,
    // headers: {token: `Bearer ${ADMIN_TOKEN}`}
})

export const baseRequest = axios.create({
    baseURL: BASE_URL
})