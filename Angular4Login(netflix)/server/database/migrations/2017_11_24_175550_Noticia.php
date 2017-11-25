<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Noticia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('noticia', function (Blueprint $table) {
            $table->increments('id');
            $table->text('titular');
            $table->text('entrada');
            $table->text('cuerpo');
            $table->string('imagen');
            $table->date('fecha');
            $table->integer('categoria_id')->unsigned();
            $table->integer('usuario_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('noticia');
    }
}
