const {createClient} = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();
const supabase = createClient(process.env.supabaseURL, process.env.supabaseKey);

async function getData() {
  try {
    const response = await supabase
      .from('content')
      .select('*')
      .order('created_at', {ascending: true});

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = async function () {
  // returning promise

  // returns a promise

  return getData()
    .then(result => {
      tier = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
      sortedData = {};

      result.forEach(item => {
        if (sortedData[item.tier] == undefined) {
          sortedData[item.tier] = [item];
        } else {
          sortedData[item.tier].push(item);
        }
      });
      return sortedData;
    })
    .catch(err => {
      console.log(error);
      throw error;
    });
};
