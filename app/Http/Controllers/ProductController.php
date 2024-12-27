<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private $products = [

        ['id' => 1,
        'name' => 'Laptop',
        'description' => 'Top-sale',
        'price' => 1500,
        'image' =>'https://i.pinimg.com/736x/fa/a2/dd/faa2ddb908f860c16eda89432764d7d8.jpg',
        ],

        ['id' => 2,
        'name' => 'Smartphone',
        'description' => 'Top-sale',
        'price' => 800,
        'image' => 'https://i.pinimg.com/736x/04/32/4b/04324b404e3e68b71e91e3518836dcd5.jpg',
        ],

        ['id' => 3, 'name' => 'Tablet',
        'description' => 'Top-sale',
        'price' => 900,
        'image' => 'https://i.pinimg.com/736x/b1/9b/f5/b19bf5125120217d3b098aed7d40e6be.jpg',
        ],

        ['id' => 4, 'name' => 'Computer',
        'description' => 'Top-sale',
        'price' => 20000,
        'image' => 'https://i.pinimg.com/736x/15/96/05/159605a43957eeaa38814532e288b043.jpg ',
        ],

        ['id' => 5, 'name' => 'Canon',
        'description' => 'Promotion',
        'price' => 5000,
        'image' => 'https://i.pinimg.com/736x/d4/1b/1d/d41b1db1bad2fe57aed7d0fe606a21f0.jpg',
        ],

        ['id' => 6, 'name' => 'HeadPhone',
        'description' => 'Promotion',
        'price' => 1900,
        'image' => 'https://i.pinimg.com/736x/e4/3a/cf/e43acf173248479d88f5abc007b8d3b8.jpg',
        ],

        ['id' => 7, 'name' => 'Microphone',
        'description' => 'Promotion',
        'price' => 1200,
        'image' => 'https://i.pinimg.com/736x/15/6d/08/156d08722c9b49949c37e0ce420704cf.jpg',
        ],

        ['id' => 8, 'name' => 'Monitor',
        'description' => 'Lastest Monitor with great features',
        'price' => 2000,
        'image' => 'https://i.pinimg.com/736x/a7/b0/43/a7b0435c646d73d4b08dbdafe0c613d7.jpg',
        ],

        ['id' => 9, 'name' => 'Mouse',
        'description' => 'Portable Mouse for everyday use',
        'price' => 1300,
        'image' => 'https://i.pinimg.com/736x/a1/6a/e4/a16ae4f74734f5ffae1adc5b41cfacf0.jpg',
        ],

        ['id' => 10, 'name' => 'Keyboard',
        'description' => 'Hight-performance Keyboard',
        'price' => 700,
        'image' => 'https://i.pinimg.com/736x/be/13/44/be134422ef5c1a0deeefc1f5bd26cf49.jpg'
        ]
    ];

    public function index()
    {
        return Inertia::render('Products/Index', ['products'=>
        $this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id', $id);

        if (!$product) {
            abort(404, 'Product Not Found');
        }

        return Inertia::render('Products/Show',['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
