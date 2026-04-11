
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xtrceqpuwqetzslwxxux.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Wt5TmlxBw3FOtZ_L_oWt0Q_RoMMVuni';
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function check() {
    console.log("Checking Releases...");
    const { data: rels } = await db.from('releases').select('*').in('release_no', ['50292581', '50341111']);
    console.log("Releases found:", JSON.stringify(rels, null, 2));

    console.log("\nChecking Trips...");
    const { data: trips } = await db.from('trips').select('*').in('release_no', ['50292581', '50341111']);
    console.log("Trips found:", JSON.stringify(trips, null, 2));
}

check();
