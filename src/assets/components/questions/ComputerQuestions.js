import React from 'react'

    const computerQuestions = [
        {
            id: 1,
            question: 'What does HTML stand for?',
            options: ['Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Tool Markup Language', 'Hyper Text Markup Language'],
            correctAnswer: 'Hyper Text Markup Language'
        },
        {
            id: 2,
            question: 'What does CSS stand for?',
            options: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
            correctAnswer: 'Cascading Style Sheets'
        },
        {
            id: 3,
            question: 'What is the full form of CPU?',
            options: ['Central Processor Unit', 'Computer Processor Unit', 'Central Processing Unit', 'Computer Processing Unit'],
            correctAnswer: 'Central Processing Unit'
        },
        {
            id: 4,
            question: 'Who is known as the father of the computer?',
            options: ['Ada Lovelace', 'Alan Turing', 'Charles Babbage', 'Steve Jobs'],
            correctAnswer: 'Charles Babbage'
        },
        {
            id: 5,
            question: 'Which programming language is used for web development?',
            options: ['C++', 'Python', 'Java', 'JavaScript'],
            correctAnswer: 'JavaScript'
        },
        {
            id: 6,
            question: 'What does SQL stand for?',
            options: ['System Query Language', 'Sequential Query Language', 'Standard Query Language', 'Structured Query Language'],
            correctAnswer: 'Structured Query Language'
        },
        {
            id: 7,
            question: 'What is the most widely used programming language in 2022?',
            options: ['Java', 'Python', 'JavaScript', 'C#'],
            correctAnswer: 'Python'
        },
        {
            id: 8,
            question: 'What is the purpose of a firewall in a computer network?',
            options: ['To block pop-up ads', 'To protect against unauthorized access', 'To speed up internet connection', 'To prevent computer crashes'],
            correctAnswer: 'To protect against unauthorized access'
        },
        {
            id: 9,
            question: 'What is the binary representation of the decimal number 10?',
            options: ['1110', '1100', '1010', '1000'],
            correctAnswer: '1010'
        },
        {
            id: 10,
            question: 'Which data structure uses the Last In, First Out (LIFO) principle?',
            options: ['Linked List', 'Stack', 'Tree', 'Queue'],
            correctAnswer: 'Stack'
        },
        {
            id: 11,
            question: 'What is the function of an operating system?',
            options: ['Manage hardware resources and provide services to applications', 'Translate programming languages into machine code', 'Analyze data and generate reports', 'Create graphical user interfaces'],
            correctAnswer: 'Manage hardware resources and provide services to applications'
        },
        {
            id: 12,
            question: 'What is the purpose of an index in a database?',
            options: ['To speed up data retrieval', 'To encrypt sensitive data', 'To organize files on a hard drive', 'To format data for printing'],
            correctAnswer: 'To speed up data retrieval'
        },
        {
            id: 13,
            question: 'Which sorting algorithm has the best average-case time complexity?',
            options: ['Merge Sort', 'Bubble Sort', 'Selection Sort', 'Insertion Sort'],
            correctAnswer: 'Merge Sort'
        },
        {
            id: 14,
            question: 'What is the purpose of version control software?',
            options: ['To track changes to files and manage collaborative development', 'To optimize computer performance', 'To secure internet connections', 'To create virtual environments for testing'],
            correctAnswer: 'To track changes to files and manage collaborative development'
        },
        {
            id: 15,
            question: 'What is the difference between HTTP and HTTPS?',
            options: ['HTTP requires authentication for access', 'HTTP is used for secure communication', 'HTTPS is faster than HTTP', 'HTTPS encrypts data for secure communication'],
            correctAnswer: 'HTTPS encrypts data for secure communication'
        },
        {
            id: 16,
            question: 'Which data structure is used to represent a hierarchical relationship between elements?',
            options: ['Graph', 'Heap', 'Tree', 'Array'],
            correctAnswer: 'Tree'
        },
        {
            id: 17,
            question: 'What does IP stand for in terms of computer networking?',
            options: ['Internet Protocol', 'Internal Processor', 'Intranet Protocol', 'Internet Programming'],
            correctAnswer: 'Internet Protocol'
        },
        {
            id: 18,
            question: 'What is the purpose of a DNS server?',
            options: ['To translate domain names into IP addresses', 'To filter spam emails', 'To compress files for faster transmission', 'To encrypt data for secure communication'],
            correctAnswer: 'To translate domain names into IP addresses'
        },
        {
            id: 19,
            question: 'Which type of join combines rows from two or more tables based on a related column between them?',
            options: ['Left Join', 'Outer Join', 'Right Join', 'Inner Join'],
            correctAnswer: 'Inner Join'
        },
        {
            id: 20,
            question: 'What is the purpose of a primary key in a database table?',
            options: ['To perform mathematical calculations', 'To sort data in ascending order', 'To uniquely identify each row in the table', 'To encrypt sensitive data'],
            correctAnswer: 'To uniquely identify each row in the table'
        },
        {
            id: 21,
            question: 'Which programming language is commonly used for machine learning and data analysis?',
            options: ['C++', 'Java', 'Python', 'JavaScript'],
            correctAnswer: 'Python'
        },
        {
            id: 22,
            question: 'What is the function of a router in a computer network?',
            options: ['To display web pages in a browser', 'To forward data packets between different networks', 'To store files for backup', 'To regulate electrical power'],
            correctAnswer: 'To forward data packets between different networks'
        },
        {
            id: 23,
            question: 'What is the purpose of the "break" statement in programming?',
            options: ['To exit a loop or switch statement prematurely', 'To pause program execution for a specified time', 'To create a new function', 'To perform a bitwise operation'],
            correctAnswer: 'To exit a loop or switch statement prematurely'
        },
        {
            id: 24,
            question: 'Which type of database does not require a fixed schema and can handle unstructured data?',
            options: ['Graph database', 'Hierarchical database', 'NoSQL database', 'Relational database'],
            correctAnswer: 'NoSQL database'
        },
        {
            id: 25,
            question: 'What is the purpose of a foreign key in a database table?',
            options: ['To perform arithmetic calculations', 'To search for data within a table', 'To establish a relationship between two tables', 'To sort data in descending order'],
            correctAnswer: 'To sort data in descending order'
        },
        {
            id: 26,
            question: 'What is the difference between TCP and UDP?',
            options: ['UDP is faster than TCP', 'TCP is used for streaming video, while UDP is used for web browsing', 'TCP is connectionless, while UDP requires a connection', 'TCP provides reliable, ordered, and error-checked delivery of data, while UDP does not guarantee reliability or ordering'],
            correctAnswer: 'TCP provides reliable, ordered, and error-checked delivery of data, while UDP does not guarantee reliability or ordering'
        },
        {
            id: 27,
            question: 'Which data structure is used to implement a priority queue?',
            options: ['Queue', 'Tree', 'Heap', 'Stack'],
            correctAnswer: 'Heap'
        },
        {
            id: 28,
            question: 'What is the purpose of a hash table?',
            options: ['To encrypt sensitive data', 'To validate email addresses', 'To store key-value pairs and provide fast retrieval of values based on keys', 'To translate domain names into IP addresses'],
            correctAnswer: 'To store key-value pairs and provide fast retrieval of values based on keys'
        },
        {
            id: 29,
            question: 'What is the role of a compiler in programming?',
            options: ['To debug program errors', 'To translate high-level programming language code into machine code', 'To execute program instructions', 'To manage computer hardware resources'],
            correctAnswer: 'To translate high-level programming language code into machine code'
        },
        {
            id: 30,
            question: 'What is the purpose of a loop in programming?',
            options: ['To perform arithmetic calculations', 'To store data temporarily', 'To repeat a block of code multiple times', 'To compare two values'],
            correctAnswer: 'To repeat a block of code multiple times'
        },
        {
            id: 31,
            question: 'What is the function of an array in programming?',
            options: ['To sort data in ascending order', 'To perform bitwise operations', 'To define a new function', 'To store a collection of elements of the same type'],
            correctAnswer: 'To store a collection of elements of the same type'
        },
        {
            id: 32,
            question: 'Which algorithm is used to find the shortest path in a graph from a source vertex to all other vertices?',
            options: ['Dijkstra\'s algorithm', 'Breadth-first search', 'Prim\'s algorithm', 'Depth-first search'],
            correctAnswer: 'Dijkstra\'s algorithm'
        },
        {
            id: 33,
            question: 'What is the purpose of a function in programming?',
            options: ['To perform arithmetic calculations', 'To compare two values', 'To encapsulate a block of code and reuse it', 'To store data temporarily'],
            correctAnswer: 'To encapsulate a block of code and reuse it'
        },
        {
            id: 34,
            question: 'What is the difference between HTTP and HTTPS?',
            options: ['HTTP requires authentication for access', 'HTTPS is faster than HTTP', 'HTTP is used for secure communication', 'HTTPS encrypts data for secure communication'],
            correctAnswer: 'HTTPS encrypts data for secure communication'
        },
        {
            id: 35,
            question: 'Which data structure uses the First In, First Out (FIFO) principle?',
            options: ['Linked List', 'Tree', 'Queue', 'Stack'],
            correctAnswer: 'Queue'
        },
        {
            id: 36,
            question: 'What is the purpose of a primary key in a database table?',
            options: ['To sort data in ascending order', 'To encrypt sensitive data', 'To perform mathematical calculations', 'To uniquely identify each row in the table'],
            correctAnswer: 'To uniquely identify each row in the table'
        },
        {
            id: 37,
            question: 'Which programming language is commonly used for web development?',
            options: ['Java', 'C++', 'Python', 'JavaScript'],
            correctAnswer: 'JavaScript'
        },
        {
            id: 38,
            question: 'What does SQL stand for?',
            options: ['Sequential Query Language', 'Standard Query Language', 'System Query Language', 'Structured Query Language'],
            correctAnswer: 'Structured Query Language'
        },
        {
            id: 39,
            question: 'What is the purpose of version control software?',
            options: ['To optimize computer performance', 'To secure internet connections', 'To create virtual environments for testing', 'To track changes to files and manage collaborative development'],
            correctAnswer: 'To track changes to files and manage collaborative development'
        },
        {
            id: 40,
            question: 'What is the purpose of an index in a database?',
            options: ['To encrypt sensitive data', 'To organize files on a hard drive', 'To format data for printing', 'To speed up data retrieval'],
            correctAnswer: 'To speed up data retrieval'
        },
        {
            id: 41,
            question: 'Which sorting algorithm has the best average-case time complexity?',
            options: ['Insertion Sort', 'Merge Sort', 'Bubble Sort', 'Selection Sort'],
            correctAnswer: 'Merge Sort'
        },
        {
            id: 42,
            question: 'What is the purpose of a firewall in a computer network?',
            options: ['To prevent computer crashes', 'To protect against unauthorized access', 'To block pop-up ads', 'To speed up internet connection'],
            correctAnswer: 'To protect against unauthorized access'
        },
        {
            id: 43,
            question: 'What is the binary representation of the decimal number 10?',
            options: ['1100', '1010', '1110', '1000'],
            correctAnswer: '1010'
        },
        {
            id: 44,
            question: 'Which data structure is used to represent a hierarchical relationship between elements?',
            options: ['Graph', 'Heap', 'Tree', 'Array'],
            correctAnswer: 'Tree'
        },
        {
            id: 45,
            question: 'What does IP stand for in terms of computer networking?',
            options: ['Internet Programming', 'Internal Processor', 'Intranet Protocol', 'Internet Protocol'],
            correctAnswer: 'Internet Protocol'
        },
        {
            id: 46,
            question: 'What is the purpose of a DNS server?',
            options: ['To filter spam emails', 'To encrypt data for secure communication', 'To translate domain names into IP addresses', 'To compress files for faster transmission'],
            correctAnswer: 'To translate domain names into IP addresses'
        },
        {
            id: 47,
            question: 'Which type of join combines rows from two or more tables based on a related column between them?',
            options: ['Left Join', 'Right Join', 'Inner Join', 'Outer Join'],
            correctAnswer: 'Inner Join'
        },
        {
            id: 48,
            question: 'What is the purpose of a primary key in a database table?',
            options: ['To sort data in ascending order', 'To perform mathematical calculations', 'To uniquely identify each row in the table', 'To encrypt sensitive data'],
            correctAnswer: 'To uniquely identify each row in the table'
        }
    ];


    const graphicQuestions = [
        {
            "id": 1,
            "question": "What does RGB stand for in graphic design?",
            "options": ["Raster Graphic Block", "Red, Green, Blue", "Resolution Gradient Boost", "Realistic Graphics Bundle"],
            "correctAnswer": "Red, Green, Blue"
        },
        {
            "id": 2,
            "question": "Which file format supports transparency in graphic design?",
            "options": ["BMP", "JPEG", "PNG", "GIF"],
            "correctAnswer": "PNG"
        },
        {
            "id": 3,
            "question": "What does DPI stand for in graphic design?",
            "options": ["Dots Per Inch", "Document Print Integration", "Data Processing Interface", "Digital Photo Integration"],
            "correctAnswer": "Dots Per Inch"
        },
        {
            "id": 4,
            "question": "Which software is widely used for vector graphic design?",
            "options": ["GIMP", "Adobe Illustrator", "CorelDRAW", "Adobe Photoshop"],
            "correctAnswer": "Adobe Illustrator"
        },
        {
            "id": 5,
            "question": "What is kerning in graphic design?",
            "options": ["Adding effects to text", "Creating gradients", "Choosing color palettes", "Adjusting space between characters"],
            "correctAnswer": "Adjusting space between characters"
        },
        {
            "id": 6,
            "question": "What is the purpose of a style guide in graphic design?",
            "options": ["Increase file size", "Maintain consistency", "Add complexity", "Enhance creativity"],
            "correctAnswer": "Maintain consistency"
        },
        {
            "id": 7,
            "question": "Which color mode is typically used for print design?",
            "options": ["HSB", "RGB", "CMYK", "PMS"],
            "correctAnswer": "CMYK"
        },
        {
            "id": 8,
            "question": "What does UI stand for in graphic design?",
            "options": ["Unified Imagery", "User Interface", "Universal Iconography", "Unique Illustration"],
            "correctAnswer": "User Interface"
        },
        {
            "id": 9,
            "question": "What is the purpose of wireframing in graphic design?",
            "options": ["Create final artwork", "Plan layout and functionality", "Add special effects", "Apply color schemes"],
            "correctAnswer": "Plan layout and functionality"
        },
        {
            "id": 10,
            "question": "Which file format is best for a logo that requires scalability?",
            "options": ["JPEG", "TIFF", "SVG", "BMP"],
            "correctAnswer": "SVG"
        },
        {
            "id": 11,
            "question": "What is the rule of thirds in graphic design?",
            "options": ["A typography rule", "A color theory principle", "A print technique", "A composition guideline"],
            "correctAnswer": "A composition guideline"
        },
        {
            "id": 12,
            "question": "What is the purpose of a mockup in graphic design?",
            "options": ["Generate code automatically", "Create a backup file", "Visualize the final product", "Apply filters to images"],
            "correctAnswer": "Visualize the final product"
        },
        {
            "id": 13,
            "question": "Which term refers to the space between lines of text in graphic design?",
            "options": ["Baseline", "Leading", "Tracking", "Kerning"],
            "correctAnswer": "Leading"
        },
        {
            "id": 14,
            "question": "What is the primary function of typography in graphic design?",
            "options": ["Animate images", "Communicate information", "Generate patterns", "Create 3D effects"],
            "correctAnswer": "Communicate information"
        },
        {
            "id": 15,
            "question": "What does CMYK stand for in graphic design?",
            "options": ["Chromatic Mixing Yield Key", "Creative Media Yield Kinetics", "Colorful Multimedia Yield Kit", "Cyan, Magenta, Yellow, Black"],
            "correctAnswer": "Cyan, Magenta, Yellow, Black"
        },
        {
            "id": 16,
            "question": "Which tool is used to cut out specific parts of an image in graphic design software?",
            "options": ["Gradient Tool", "Clipping Mask", "Clone Stamp Tool", "Eyedropper Tool"],
            "correctAnswer": "Clipping Mask"
        },
        {
            "id": 17,
            "question": "What is the purpose of a grid system in graphic design?",
            "options": ["Apply textures to images", "Generate color palettes", "Provide structure and organization", "Create random shapes"],
            "correctAnswer": "Provide structure and organization"
        },
        {
            "id": 18,
            "question": "Which design principle focuses on creating visual interest through contrast?",
            "options": ["Harmony", "Emphasis", "Proximity", "Balance"],
            "correctAnswer": "Emphasis"
        },
        {
            "id": 19,
            "question": "What is the primary purpose of color theory in graphic design?",
            "options": ["Applying filters to images", "Creating black and white designs", "Choosing fonts", "Understanding color relationships"],
            "correctAnswer": "Understanding color relationships"
        },
        {
            "id": 20,
            "question": "What is the purpose of bleeds in print design?",
            "options": ["Enhance image resolution", "Create a faded effect", "Ensure color extends to the edge of the paper", "Add text to images"],
            "correctAnswer": "Ensure color extends to the edge of the paper"
        },
        {
            "id": 21,
            "question": "What does PPI stand for in graphic design?",
            "options": ["Printable Picture Indicator", "Palette Printing Integration", "Pixels Per Inch", "Photo Processing Interface"],
            "correctAnswer": "Pixels Per Inch"
        },
        {
            "id": 22,
            "question": "Which software is primarily used for photo editing in graphic design?",
            "options": ["CorelDRAW", "Adobe Illustrator", "Adobe Photoshop", "InDesign"],
            "correctAnswer": "Adobe Photoshop"
        },
        {
            "id": 23,
            "question": "What is the purpose of the pen tool in graphic design software?",
            "options": ["Add text to images", "Create precise shapes and paths", "Apply filters to images", "Adjust brightness and contrast"],
            "correctAnswer": "Create precise shapes and paths"
        },
        {
            "id": 24,
            "question": "What is the purpose of a mood board in graphic design?",
            "options": ["Create final artwork", "Apply color schemes", "Generate code automatically", "Gather inspiration and ideas"],
            "correctAnswer": "Gather inspiration and ideas"
        },
        {
            "id": 25,
            "question": "Which design element refers to the relationship between the sizes of various elements?",
            "options": ["Proximity", "Texture", "Balance", "Scale"],
            "correctAnswer": "Scale"
        },
        {
            "id": 26,
            "question": "What is the purpose of the color picker tool in graphic design software?",
            "options": ["Rotate images", "Create shapes", "Select colors from an image", "Apply text effects"],
            "correctAnswer": "Select colors from an image"
        },
        {
            "id": 27,
            "question": "What is the purpose of the layers panel in graphic design software?",
            "options": ["Adjust color temperature", "Generate code automatically", "Organize and manage design elements", "Create animations"],
            "correctAnswer": "Organize and manage design elements"
        },
        {
            "id": 28,
            "question": "What does the term 'vector' refer to in graphic design?",
            "options": ["High-resolution photographs", "Images defined by mathematical equations", "Pixel-based graphics", "Animated graphics"],
            "correctAnswer": "Images defined by mathematical equations"
        },
        {
            "id": 29,
            "question": "What is the primary purpose of the brush tool in graphic design software?",
            "options": ["Adjusting brightness and contrast", "Creating animations", "Painting and drawing", "Adding text to images"],
            "correctAnswer": "Painting and drawing"
        },
        {
            "id": 30,
            "question": "What is the purpose of the eyedropper tool in graphic design software?",
            "options": ["Adjust image resolution", "Create precise shapes", "Add textures to images", "Select colors from an image"],
            "correctAnswer": "Select colors from an image"
        },
        {
            "id": 31,
            "question": "Which design element refers to the distribution of visual weight in a composition?",
            "options": ["Emphasis", "Contrast", "Harmony", "Balance"],
            "correctAnswer": "Balance"
        },
        {
            "id": 32,
            "question": "What is the purpose of the histogram tool in graphic design software?",
            "options": ["Adjust text spacing", "Create shapes", "Visualize tonal range", "Add filters to images"],
            "correctAnswer": "Visualize tonal range"
        },
        {
            "id": 33,
            "question": "What does the acronym 'UI' stand for in graphic design?",
            "options": ["Unified Imagery", "Unique Illustration", "User Interface", "User Integration"],
            "correctAnswer": "User Interface"
        },
        {
            "id": 34,
            "question": "What is the primary purpose of the opacity setting in graphic design software?",
            "options": ["Change font size", "Create animations", "Apply filters", "Adjust transparency"],
            "correctAnswer": "Adjust transparency"
        },
        {
            "id": 35,
            "question": "Which file format is best for saving images with transparent backgrounds?",
            "options": ["JPEG", "GIF", "TIFF", "PNG"],
            "correctAnswer": "PNG"
        },
        {
            "id": 36,
            "question": "What does the term 'raster' refer to in graphic design?",
            "options": ["Pixel-based images", "Vector graphics", "High-resolution photographs", "Animated graphics"],
            "correctAnswer": "Pixel-based images"
        },
        {
            "id": 37,
            "question": "What is the purpose of the grid tool in graphic design software?",
            "options": ["Rotate images", "Apply filters", "Adjust color temperature", "Create precise layouts"],
            "correctAnswer": "Create precise layouts"
        },
        {
            "id": 38,
            "question": "Which design element refers to the relationship between elements in a composition?",
            "options": ["Alignment", "Contrast", "Proximity", "Hierarchy"],
            "correctAnswer": "Proximity"
        },
        {
            "id": 39,
            "question": "What is the purpose of the magic wand tool in graphic design software?",
            "options": ["Add text to images", "Adjust brightness and contrast", "Create precise shapes", "Select areas with similar colors"],
            "correctAnswer": "Select areas with similar colors"
        },
        {
            "id": 40,
            "question": "What is the primary purpose of the gradient tool in graphic design software?",
            "options": ["Adjust image resolution", "Add filters to images", "Generate code automatically", "Create gradual transitions between colors"],
            "correctAnswer": "Create gradual transitions between colors"
        },
        {
            "id": 41,
            "question": "What is the purpose of the history panel in graphic design software?",
            "options": ["Apply textures to images", "Organize layers", "Generate code automatically", "Undo or redo actions"],
            "correctAnswer": "Undo or redo actions"
        },
        {
            "id": 42,
            "question": "Which term refers to the process of arranging type in graphic design?",
            "options": ["Composition", "Hierarchy", "Typography", "Layout"],
            "correctAnswer": "Typography"
        },
        {
            "id": 43,
            "question": "What is the purpose of the pathfinder tool in graphic design software?",
            "options": ["Add textures to images", "Create animations", "Combine or divide shapes", "Select colors from an image"],
            "correctAnswer": "Combine or divide shapes"
        },
        {
            "id": 44,
            "question": "What is the purpose of the rulers in graphic design software?",
            "options": ["Add text to images", "Apply filters", "Generate code automatically", "Measure distances and align objects"],
            "correctAnswer": "Measure distances and align objects"
        },
        {
            "id": 45,
            "question": "Which design element refers to the relationship between elements based on their visual weights?",
            "options": ["Alignment", "Contrast", "Hierarchy", "Balance"],
            "correctAnswer": "Hierarchy"
        },
        {
            "id": 46,
            "question": "What does the term 'sans-serif' refer to in typography?",
            "options": ["Typefaces with serifs", "Typefaces with italicized characters", "Typefaces without decorative lines", "Typefaces with decorative lines"],
            "correctAnswer": "Typefaces without decorative lines"
        },
        {
            "id": 47,
            "question": "What is the purpose of the transform tool in graphic design software?",
            "options": ["Add text to images", "Adjust color temperature", "Create animations", "Resize, rotate, and skew objects"],
            "correctAnswer": "Resize, rotate, and skew objects"
        },
        {
            "id": 48,
            "question": "What does the acronym 'RGB' stand for in graphic design?",
            "options": ["Resolution Gradient Boost", "Realistic Graphics Bundle", "Raster Graphic Block", "Red, Green, Blue"],
            "correctAnswer": "Red, Green, Blue"
        },
        {
            "id": 49,
            "question": "What is the primary purpose of the eyedropper tool in graphic design software?",
            "options": ["Create precise shapes", "Adjust image resolution", "Add textures to images", "Select colors from an image"],
            "correctAnswer": "Select colors from an image"
        },
        {
            "id": 50,
            "question": "Which design principle focuses on creating visual interest through repetition?",
            "options": ["Emphasis", "Proximity", "Balance", "Rhythm"],
            "correctAnswer": "Rhythm"
        }
        
    ];

    const animeQuestions = [
        {
            "id": 1,
            "question": "Who is the main character in the anime 'Naruto'?",
            "options": ["Sasuke Uchiha", "Kakashi Hatake", "Naruto Uzumaki", "Sakura Haruno"],
            "correctAnswer": "Naruto Uzumaki"
        },
        {
            "id": 2,
            "question": "In the anime 'Attack on Titan,' what is the name of the main protagonist?",
            "options": ["Levi Ackerman", "Armin Arlert", "Eren Yeager", "Mikasa Ackerman"],
            "correctAnswer": "Eren Yeager"
        },
        {
            "id": 3,
            "question": "What is the name of the mysterious notebook in the anime 'Death Note'?",
            "options": ["Life Note", "Death Note", "Dark Note", "Kira Note"],
            "correctAnswer": "Death Note"
        },
        {
            "id": 4,
            "question": "Which anime features a character named Monkey D. Luffy in search of the legendary One Piece treasure?",
            "options": ["Bleach", "Dragon Ball", "Naruto", "One Piece"],
            "correctAnswer": "One Piece"
        },
        {
            "id": 5,
            "question": "What is the name of the main protagonist in 'Fullmetal Alchemist'?",
            "options": ["Winry Rockbell", "Edward Elric", "Roy Mustang", "Alphonse Elric"],
            "correctAnswer": "Edward Elric"
        },
        {
            "id": 6,
            "question": "Which anime follows the story of a young girl named Chihiro who becomes trapped in a mysterious world of spirits?",
            "options": ["My Neighbor Totoro", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle"],
            "correctAnswer": "Spirited Away"
        },
        {
            "id": 7,
            "question": "What is the name of the virtual reality game in the anime 'Sword Art Online'?",
            "options": ["Gun Gale Online", "Sword Art Online", "Alfheim Online", "World Seed"],
            "correctAnswer": "Sword Art Online"
        },
        {
            "id": 8,
            "question": "In the anime 'One Punch Man,' what is the name of the main character who can defeat any opponent with a single punch?",
            "options": ["Mumen Rider", "Genos", "Saitama", "Garou"],
            "correctAnswer": "Saitama"
        },
        {
            "id": 9,
            "question": "Who is known as the 'Strongest Hero' in the anime 'My Hero Academia'?",
            "options": ["Endeavor", "Shoto Todoroki", "Izuku Midoriya", "All Might"],
            "correctAnswer": "All Might"
        },
        {
            "id": 10,
            "question": "What is the name of the powerful group of alchemists in the anime 'Fullmetal Alchemist: Brotherhood'?",
            "options": ["State Alchemists", "The Seven Sins", "The Elric Brothers", "Homunculi"],
            "correctAnswer": "Homunculi"
        },
        {
            "id": 11,
            "question": "In the anime 'Dragon Ball Z,' what technique does Goku use to defeat Frieza?",
            "options": ["Spirit Bomb", "Instant Transmission", "Kaio-ken", "Kamehameha"],
            "correctAnswer": "Spirit Bomb"
        },
        {
            "id": 12,
            "question": "Who is the creator of the anime 'Neon Genesis Evangelion'?",
            "options": ["Tetsurō Araki", "Mamoru Hosoda", "Hideaki Anno", "Hayao Miyazaki"],
            "correctAnswer": "Hideaki Anno"
        },
        {
            "id": 13,
            "question": "Which anime features a young witch named Kiki who starts her own delivery service?",
            "options": ["Spirited Away", "Howl's Moving Castle", "My Neighbor Totoro", "Kiki's Delivery Service"],
            "correctAnswer": "Kiki's Delivery Service"
        },
        {
            "id": 14,
            "question": "What is the name of the giant robot controlled by the protagonist in the anime 'Gurren Lagann'?",
            "options": ["Big O", "EVA-02", "Gurren Lagann", "Evangelion Unit-01"],
            "correctAnswer": "Gurren Lagann"
        },
        {
            "id": 15,
            "question": "Which anime follows the adventures of a young boy named Gon Freecss as he aspires to become a Hunter?",
            "options": ["Fairy Tail", "Hunter x Hunter", "Naruto", "Bleach"],
            "correctAnswer": "Hunter x Hunter"
        },
        {
            "id": 16,
            "question": "What is the name of the school for assassins in the anime 'Assassination Classroom'?",
            "options": ["Yokai Academy", "Kunugigaoka Junior High School", "Hope's Peak Academy", "U.A. High School"],
            "correctAnswer": "Kunugigaoka Junior High School"
        },
        {
            "id": 17,
            "question": "In the anime 'Cowboy Bebop,' what is the name of the ship piloted by the main characters?",
            "options": ["Hammerhead", "Bebop", "Swordfish II", "Red Tail"],
            "correctAnswer": "Bebop"
        },
        {
            "id": 18,
            "question": "What is the name of the humanoid alien species in the anime 'Neon Genesis Evangelion'?",
            "options": ["Titans", "Angels", "Demons", "Evas"],
            "correctAnswer": "Angels"
        },
        {
            "id": 19,
            "question": "Which anime follows the journey of a young alchemist named Edward Elric and his brother Alphonse as they search for the Philosopher's Stone?",
            "options": ["Attack on Titan", "My Hero Academia", "One Punch Man", "Fullmetal Alchemist"],
            "correctAnswer": "Fullmetal Alchemist"
        },
        {
            "id": 20,
            "question": "What is the name of the protagonist in the anime 'One Piece' who possesses the power of the Gum-Gum Fruit?",
            "options": ["Nami", "Roronoa Zoro", "Monkey D. Luffy", "Usopp"],
            "correctAnswer": "Monkey D. Luffy"
        },
        {
            "id": 21,
            "question": "In the anime 'Demon Slayer: Kimetsu no Yaiba,' what is the name of the protagonist who becomes a demon slayer to avenge his family?",
            "options": ["Nezuko Kamado", "Inosuke Hashibira", "Zenitsu Agatsuma", "Tanjiro Kamado"],
            "correctAnswer": "Tanjiro Kamado"
        },
        {
            "id": 22,
            "question": "What is the name of the virtual reality MMORPG in the anime 'Log Horizon'?",
            "options": ["Aincrad", "Gun Gale Online", "Elder Tale", "ALfheim Online"],
            "correctAnswer": "Elder Tale"
        },
        {
            "id": 23,
            "question": "In the anime 'My Hero Academia,' what is the name of the main character who inherits the Quirk 'One For All'?",
            "options": ["Izuku Midoriya", "Katsuki Bakugo", "Ochaco Uraraka", "Shoto Todoroki"],
            "correctAnswer": "Izuku Midoriya"
        },
        {
            "id": 24,
            "question": "Which anime features a group of students trying to assassinate their alien teacher before he destroys the Earth?",
            "options": ["Code Geass", "Assassination Classroom", "Death Note", "Tokyo Ghoul"],
            "correctAnswer": "Assassination Classroom"
        },
        {
            "id": 25,
            "question": "What is the name of the protagonist in the anime 'Attack on Titan' who vows to eliminate all Titans after witnessing their destruction?",
            "options": ["Eren Yeager", "Armin Arlert", "Mikasa Ackerman", "Levi Ackerman"],
            "correctAnswer": "Eren Yeager"
        },
        {
            "id": 26,
            "question": "In the anime 'Dragon Ball Z,' what is the name of Goku's eldest son?",
            "options": ["Gohan", "Goten", "Trunks", "Vegeta"],
            "correctAnswer": "Gohan"
        },
        {
            "id": 27,
            "question": "What is the name of the city where most of the action takes place in the anime 'Attack on Titan'?",
            "options": ["Wall Maria", "Shiganshina District", "Trost District", "Wall Rose"],
            "correctAnswer": "Shiganshina District"
        },
        {
            "id": 28,
            "question": "Which anime follows the story of two brothers who commit the taboo of human transmutation in an attempt to bring their mother back to life?",
            "options": ["One Piece", "Attack on Titan", "Naruto", "Fullmetal Alchemist"],
            "correctAnswer": "Fullmetal Alchemist"
        },
        {
            "id": 29,
            "question": "What is the name of the powerful sword wielded by Ichigo Kurosaki in the anime 'Bleach'?",
            "options": ["Senbonzakura", "Zangetsu", "Sode no Shirayuki", "Tensa Zangetsu"],
            "correctAnswer": "Zangetsu"
        },
        {
            "id": 30,
            "question": "In the anime 'Sailor Moon,' what is the name of the protagonist who transforms into a sailor-suited superheroine?",
            "options": ["Rei Hino", "Minako Aino", "Usagi Tsukino", "Ami Mizuno"],
            "correctAnswer": "Usagi Tsukino"
        },
        {
            "id": 31,
            "question": "Which anime features a group of high school students who gain supernatural powers after encountering a mysterious entity called 'Kizuna AI'?",
            "options": ["Angel Beats!", "Charlotte", "Kiznaiver", "Clannad"],
            "correctAnswer": "Charlotte"
        },
        {
            "id": 32,
            "question": "What is the name of the school attended by the characters in the anime 'My Hero Academia'?",
            "options": ["U.A. High School", "Hogwarts School of Witchcraft and Wizardry", "Yokai Academy", "Kunugigaoka Junior High School"],
            "correctAnswer": "U.A. High School"
        },
        {
            "id": 33,
            "question": "In the anime 'One Piece,' what is the name of the pirate crew led by Monkey D. Luffy?",
            "options": ["Red Hair Pirates", "Blackbeard Pirates", "Straw Hat Pirates", "Whitebeard Pirates"],
            "correctAnswer": "Straw Hat Pirates"
        },
        {
            "id": 34,
            "question": "What is the name of the powerful demon who serves as a major antagonist in the anime 'Demon Slayer: Kimetsu no Yaiba'?",
            "options": ["Akaza", "Muzan Kibutsuji", "Kokushibo", "Rui"],
            "correctAnswer": "Muzan Kibutsuji"
        },
        {
            "id": 35,
            "question": "Which anime follows the journey of a young boy named Gon Freecss as he aspires to become a Hunter?",
            "options": ["Naruto", "Bleach", "Hunter x Hunter", "Fairy Tail"],
            "correctAnswer": "Hunter x Hunter"
        },
        {
            "id": 36,
            "question": "What is the name of the virtual reality MMORPG in the anime 'Sword Art Online'?",
            "options": ["ALfheim Online", "Sword Art Online", "Gun Gale Online", "Elder Tale"],
            "correctAnswer": "Sword Art Online"
        },
        {
            "id": 37,
            "question": "Who is the main antagonist in the anime 'Naruto'?",
            "options": ["Pain", "Madara Uchiha", "Orochimaru", "Obito Uchiha"],
            "correctAnswer": "Madara Uchiha"
        },
        {
            "id": 38,
            "question": "In the anime 'Attack on Titan,' what is the name of the elite squad tasked with protecting humanity from Titans?",
            "options": ["Scouts", "Military Police", "Garrison", "Survey Corps"],
            "correctAnswer": "Survey Corps"
        },
        {
            "id": 39,
            "question": "Which anime features a group of students with psychic powers who form a secret organization to combat other individuals with supernatural abilities?",
            "options": ["Tokyo Ghoul", "Mob Psycho 100", "Code Geass", "Parasyte"],
            "correctAnswer": "Mob Psycho 100"
        },
        {
            "id": 40,
            "question": "What is the name of the giant robot controlled by the protagonist in the anime 'Neon Genesis Evangelion'?",
            "options": ["Big O", "Gurren Lagann", "Evangelion Unit-01", "EVA-02"],
            "correctAnswer": "Evangelion Unit-01"
        },
        {
            "id": 41,
            "question": "In the anime 'My Hero Academia,' what is the name of the main character who aspires to become the number one hero?",
            "options": ["Katsuki Bakugo", "Shoto Todoroki", "Izuku Midoriya", "Ochaco Uraraka"],
            "correctAnswer": "Izuku Midoriya"
        },
        {
            "id": 42,
            "question": "What is the name of the organization responsible for enforcing the rules of the Death Note in the anime 'Death Note'?",
            "options": ["SPK", "Task Force", "Shinigami Realm", "NPA"],
            "correctAnswer": "Task Force"
        },
        {
            "id": 43,
            "question": "Which anime features a group of teenagers who pilot giant robots called 'Evangelions' to protect Earth from mysterious creatures known as Angels?",
            "options": ["Mobile Suit Gundam", "Neon Genesis Evangelion", "Gurren Lagann", "Code Geass"],
            "correctAnswer": "Neon Genesis Evangelion"
        },
        {
            "id": 44,
            "question": "In the anime 'One Punch Man,' what is the name of the cyborg who becomes Saitama's disciple?",
            "options": ["Mumen Rider", "Bang", "Genos", "Speed-o'-Sound Sonic"],
            "correctAnswer": "Genos"
        },
        {
            "id": 45,
            "question": "What is the name of the protagonist in the anime 'Sword Art Online' who becomes trapped in the virtual reality MMORPG?",
            "options": ["Asuna", "Leafa", "Kirito", "Sinon"],
            "correctAnswer": "Kirito"
        },
        {
            "id": 46,
            "question": "Which anime follows the journey of a young ninja named Naruto Uzumaki as he seeks recognition and dreams of becoming the Hokage?",
            "options": ["One Piece", "Dragon Ball", "Naruto", "Bleach"],
            "correctAnswer": "Naruto"
        },
        {
            "id": 47,
            "question": "What is the name of the protagonist in the anime 'Tokyo Ghoul' who becomes a half-ghoul after a chance encounter with one?",
            "options": ["Haise Sasaki", "Touka Kirishima", "Rize Kamishiro", "Ken Kaneki"],
            "correctAnswer": "Ken Kaneki"
        },
        {
            "id": 48,
            "question": "In the anime 'Dragon Ball Z,' what is the name of the technique used by Goku to fuse with Vegeta?",
            "options": ["Fusion Dance", "Spirit Bomb Fusion", "Namekian Fusion", "Potara Earrings"],
            "correctAnswer": "Fusion Dance"
        },
        {
            "id": 49,
            "question": "Which anime features a group of students with unique powers who are drawn into a deadly game orchestrated by a mysterious entity known as 'Zero Two'?",
            "options": ["Death Parade", "Darling in the Franxx", "No Game No Life", "Mirai Nikki"],
            "correctAnswer": "Darling in the Franxx"
        },
        {
            "id": 50,
            "question": "What is the name of the protagonist in the anime 'Cowboy Bebop' who is a bounty hunter?",
            "options": ["Jet Black", "Faye Valentine", "Spike Spiegel", "Ed"],
            "correctAnswer": "Spike Spiegel"
        }        
    ];

    export const addComputerQuestion = (id) =>{
        return computerQuestions[id];
    }

    export const addAnimeQuestion = (id) =>{
        return animeQuestions[id];
    }

    export const addGraphicQuestion = (id) =>{
        return graphicQuestions[id];
    }

