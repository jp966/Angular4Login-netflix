<?php

use Illuminate\Database\Seeder;

class PeliculaTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pelicula')->insert([
        	'titulo' => 'Titanic',
        	'director' => 'James Cameron',
        	'descripcion' => 'Esta es una descripción',
        	'precio' =>500, 

        ]);
    }
}
