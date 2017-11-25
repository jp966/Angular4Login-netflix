<?php

use Illuminate\Database\Seeder;

class UsersTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('users')->insert([
        	'name'=>'jp966',
        	'email'=>'j.tobias01@ufromail.cl',
        	'password' => bcrypt('1234'),

        ]);
    }
}
