<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
	use Notifiable;

	public $table = 'pelicula';
	protected $primaryKey='id';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'titulo', 'descripcion','director','precio'
    ];
  
   
}
