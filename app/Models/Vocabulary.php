<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Auth;

class Vocabulary extends Model
{
    use HasFactory;
    protected $fillable = [
    'english',
    'japanese',
    'user_id'
];

    public function getPaginateByLimit(int $limit_count = 10) {
            $id = Auth::id();

        return User::find($id)->vocabularies()->orderBy('updated_at', 'DESC')->paginate($limit_count);
    }
    
    
    
    
    public function user() {
        return $this->belongsTo(User::class);
    }
}
