<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
// use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    public function index()
    {
        $execute = shell_exec('cd ' . Storage::path('NodeApi') . ' && node ' . Storage::path('NodeApi/') . 'manage_report.js');
        return $execute;
    }
}
