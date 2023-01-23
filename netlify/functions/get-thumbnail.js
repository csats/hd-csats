import { createClient } from '@supabase/supabase-js';

const {
  CSATS_DATABASE_URL,
  CSATS_DATABASE_SECRET_API_KEY
} = process.env;

const supabase = createClient(CSATS_DATABASE_URL, CSATS_DATABASE_SECRET_API_KEY);

exports.handler = async function (event, context) {
  // let { data, error } = await supabase
  //   .storage
  //   .from('case-thumbnails')
  //   .download(event)
  console.log(event.queryStringParameters)
  console.log(context.queryStringParameters)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello'}),
  };

}