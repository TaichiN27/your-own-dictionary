<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'correct',
        'user_id',
        'word',

    ];


        protected $casts = [
            'vocabulary'  => 'json',
        ];

        public function vocabulary() {
            return $this->belongsTo(Vocabulary::class);
        }
}
