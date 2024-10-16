import { db } from '$lib/db/drizzle';
import { sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
const getTestData = async (testid: string) => {
	const test = await db.run(sql`select * from test where test.id = ${testid}`);

	if (!test) throw error(404, 'User not found');
	return test;
};

export const load: PageServerLoad = async () => {
	const test = await getTestData('cfvfgv');
};
