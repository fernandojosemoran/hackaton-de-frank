from django.db import models

# Create your models here.


def product_image_directory(_, file_name):
    return 'upload/products/{0}'.format(file_name)


class Product(models.Model):
    class ObjectProduct(models.Manager):
        def get_queryset(self) -> models.QuerySet:
            return super().get_queryset().filter(category="Computers & Tablets")

    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    product_status_options = (
        ('None', 'None'),
        ('Computers & Tablets', 'Computers & Tablets'),
        ('Mobile Phones', 'Mobile Phones'),
        ('Accessories', 'Accessories'),
        ('Home Appliances', 'Home Appliances'),
        ('Men\'s Clothing', 'Men\'s Clothing'),
        ('Women\'s Clothing', 'Women\'s Clothing'),
        ('Children\'s Clothing', 'Children\'s Clothing'),
        ('Footwear', 'Footwear'),
        ('Furniture', 'Furniture'),
        ('Kitchenware', 'Kitchenware'),
        ('Bedding', 'Bedding'),
        ('Home Decor', 'Home Decor'),
        ('Skincare', 'Skincare'),
        ('Haircare', 'Haircare'),
        ('Personal Care', 'Personal Care'),
        ('Supplements', 'Supplements'),
        ('Fitness Equipment', 'Fitness Equipment'),
        ('Outdoor Gear', 'Outdoor Gear'),
        ('Sportswear', 'Sportswear'),
        ('Camping Equipment', 'Camping Equipment'),
        ('Car Accessories', 'Car Accessories'),
        ('Motorcycle Parts', 'Motorcycle Parts'),
        ('Tools & Equipment', 'Tools & Equipment'),
        ('Fiction', 'Fiction'),
        ('Non-Fiction', 'Non-Fiction'),
        ('Educational', 'Educational'),
        ('Office Supplies', 'Office Supplies'),
        ('Action Figures', 'Action Figures'),
        ('Board Games', 'Board Games'),
        ('Educational Toys', 'Educational Toys'),
        ('Video Games', 'Video Games'),
        ('Fresh Produce', 'Fresh Produce'),
        ('Packaged Foods', 'Packaged Foods'),
        ('Beverages', 'Beverages'),
        ('Household Supplies', 'Household Supplies'),
        ('Pet Food', 'Pet Food'),
        ('Pet Toys', 'Pet Toys'),
        ('Grooming Products', 'Grooming Products'),
        ('Pet Accessories', 'Pet Accessories')
    )
    category = models.CharField(
        max_length=255,
        choices=product_status_options,
        default="None"
    )

    quantity = models.IntegerField(default=0)

    slug = models.SlugField(max_length=255, unique=True)

    image = models.ImageField(
        upload_to=product_image_directory,
        max_length=500
    )

    description = models.TextField()

    update_at = models.DateTimeField(auto_now=True, editable=False)
    create_at = models.DateTimeField(auto_now_add=True, editable=False)

    time_stamp = models.IntegerField(default=0)

    # class Meta:
    #     ordering = ('Computers & Tablets', 'Computers & Tablets')

    def __str__(self) -> str:
        return f"{self.name}-{self.price}"
