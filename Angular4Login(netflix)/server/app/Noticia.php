<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    use Notifiable;

	public $table = 'noticia';
	protected $primaryKey='id';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'titular', 'entrada','cuerpo','imagen','fecha','categoria_id','usuario_id'
    ];


   /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function user()
    {
        return $this->belongsTo(\App\Usuario::class);
    }

    
  
}
