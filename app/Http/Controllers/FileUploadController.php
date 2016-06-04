<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;




class FileUploadController extends Controller
{
   /**
     * Upload picture .
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //define the image paths
        $store_path = 'uploads/';
        $destinationFolder = public_path('uploads/');
        //
        if(Input::hasFile('picturePic')) {
            $image = Input::file('picturePic'); 
            $tmpFileName = time() . '.' . $image->getClientOriginalExtension();
            $path = $destinationFolder . $tmpFileName;
            $image->move($destinationFolder, $tmpFileName);
            //
            Image::make($path)->heighten(300, function ($constraint) {
                $constraint->upsize();
            })->save($path);
            //
            $relativePath = $store_path . $tmpFileName;
          return response()->json(array('path'=> $relativePath), 200);
        }
         else {
          return response()->json(false, 200);
        }
  }
}
