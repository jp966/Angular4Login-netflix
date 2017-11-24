<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
     use Notifiable;

	public $table = 'categoria';
	protected $primaryKey='id';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion'
    ];


   
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function noticia()
    {
        return $this->hasMany(\App\Noticia::class);
    }
}
