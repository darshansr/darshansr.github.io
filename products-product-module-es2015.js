(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-edit/product-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-edit/product-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"product\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <form novalidate (ngSubmit)=\"saveProduct()\" [formGroup]=\"productForm\">\r\n      <fieldset>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"productNameId\">Product Name</label>\r\n\r\n          <div class=\"col-md-9\">\r\n            <input [ngClass]=\"{'is-invalid': displayMessage.productName }\" \r\n                   class=\"form-control\" \r\n                   id=\"productNameId\" \r\n                   type=\"text\" \r\n                   placeholder=\"Name (required)\" \r\n                   formControlName=\"productName\" \r\n                   (blur)=\"blur()\" />\r\n            <span class=\"invalid-feedback\" *ngIf=\"displayMessage.productName\">\r\n              {{displayMessage.productName}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"productCodeId\">Product Code</label>\r\n\r\n          <div class=\"col-md-9\">\r\n            <input [ngClass]=\"{'is-invalid': displayMessage.productCode}\" \r\n                   class=\"form-control\"\r\n                   id=\"productCodeId\"\r\n                   type=\"text\"\r\n                   placeholder=\"Code (required)\"\r\n                   formControlName=\"productCode\"\r\n                   (blur)=\"blur()\" />\r\n            <span class=\"invalid-feedback\" *ngIf=\"displayMessage.productCode\">\r\n              {{displayMessage.productCode}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"starRatingId\">Star Rating (1-5)</label>\r\n\r\n          <div class=\"col-md-9\">\r\n            <input [ngClass]=\"{'is-invalid': displayMessage.starRating}\"\r\n                   class=\"form-control\" \r\n                   id=\"starRatingId\" \r\n                   type=\"text\" \r\n                   placeholder=\"Rating\" \r\n                   formControlName=\"starRating\" />\r\n            <span class=\"invalid-feedback\" *ngIf=\"displayMessage.starRating\">\r\n              {{displayMessage.starRating}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"descriptionId\">Description</label>\r\n\r\n          <div class=\"col-md-9\">\r\n            <textarea [ngClass]=\"{'is-invalid': displayMessage.description}\"\r\n                      class=\"form-control\" \r\n                      id=\"descriptionId\" \r\n                      placeholder=\"Description\" \r\n                      rows=3 \r\n                      formControlName=\"description\">\r\n            </textarea>\r\n            <span class=\"invalid-feedback\" *ngIf=\"displayMessage.description\">\r\n              {{ displayMessage.description}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-md-10 col-md-offset-2\">\r\n            <span>\r\n              <button class=\"btn btn-primary\" type=\"submit\" style=\"width:80px;margin-right:10px\" [disabled]=\"!productForm.valid || !productForm.dirty\">\r\n                Save\r\n              </button>\r\n            </span>\r\n            <span>\r\n              <button class=\"btn btn-light\" type=\"button\" style=\"width:80px;margin-right:10px\" (click)=\"cancelEdit()\">\r\n                Cancel\r\n              </button>\r\n            </span>\r\n            <span>\r\n              <button class=\"btn btn-light\" type=\"button\" style=\"width:80px\" (click)=\"deleteProduct()\">\r\n                Delete\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n  Error: {{ errorMessage }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-list/product-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-list/product-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\" *ngIf=\"products\">\r\n    <div class=\"list-group\">\r\n      <button class=\"list-group-item list-group-item-action rounded-0\"\r\n          *ngFor=\"let product of products\"\r\n          [ngClass]=\"{'active': product?.id === selectedProduct?.id}\"\r\n          (click)=\"productSelected(product)\">{{ product.productName }}\r\n        <ng-container *ngIf=\"displayCode\">\r\n          ({{ product.productCode }})\r\n        </ng-container>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"form-check col-md-7\">\r\n        <label>\r\n          <input class=\"form-check-input\"\r\n                 type=\"checkbox\"\r\n                 (change)=\"checkChanged($event.target.checked)\"\r\n                 [checked]=\"displayCode\">\r\n          Display Product Code\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4 text-right\">\r\n        <button class=\"btn btn-primary\" (click)=\"newProduct()\">\r\n          Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n  Error: {{ errorMessage }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/containers/product-shell/product-shell.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/containers/product-shell/product-shell.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n  <div class='col-md-4'>\r\n    <pm-product-list\r\n    [displayCode]=\"displayCode$ | async\"\r\n    [products]=\"products$ | async\"\r\n    [selectedProduct]=\"selectedProduct$ | async\"\r\n\t  [errorMessage]=\"errorMessage$ | async\"\r\n    (checked)=\"checkChanged($event)\"\r\n    (initializeNewProduct)=\"(newProduct())\"\r\n    (selected)=\"productSelected($event)\"></pm-product-list>\r\n  </div>\r\n  <div class='col-md-8'>\r\n    <pm-product-edit\r\n    [selectedProduct]=\"selectedProduct$ | async\"\r\n\t  [errorMessage]=\"errorMessage$ | async\"\r\n    (clearCurrent)=\"clearProduct()\"\r\n    (update)=\"updateProduct($event)\"\r\n    (delete)=\"deleteProduct($event)\"\r\n    (create)=\"saveProduct($event)\"></pm-product-edit>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/products/components/product-edit/product-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/products/components/product-edit/product-edit.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/components/product-edit/product-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/product-edit/product-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_generic_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/generic-validator */ "./src/app/shared/generic-validator.ts");
/* harmony import */ var _shared_number_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/number.validator */ "./src/app/shared/number.validator.ts");





let ProductEditComponent = class ProductEditComponent {
    constructor(fb) {
        this.fb = fb;
        this.pageTitle = 'Product Edit';
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentActive = true;
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }
        };
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new _shared_generic_validator__WEBPACK_IMPORTED_MODULE_3__["GenericValidator"](this.validationMessages);
    }
    ngOnInit() {
        // Define the form group
        this.productForm = this.fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            starRating: ['', _shared_number_validator__WEBPACK_IMPORTED_MODULE_4__["NumberValidators"].range(1, 5)],
            description: ''
        });
        // Watch for value changes
        this.productForm.valueChanges.subscribe(value => this.displayMessage = this.genericValidator.processMessages(this.productForm));
    }
    ngOnChanges(changes) {
        // patch form with value from the store
        if (changes.selectedProduct) {
            const product = changes.selectedProduct.currentValue;
            this.displayProduct(product);
        }
    }
    ngOnDestroy() {
        this.componentActive = false;
    }
    // Also validate on blur
    // Helpful if the user tabs through required fields
    blur() {
        this.displayMessage = this.genericValidator.processMessages(this.productForm);
    }
    displayProduct(product) {
        // Set the local product property
        this.product = product;
        if (this.product && this.productForm) {
            // Reset the form back to pristine
            this.productForm.reset();
            // Display the appropriate page title
            if (this.product.id === 0) {
                this.pageTitle = 'Add Product';
            }
            else {
                this.pageTitle = `Edit Product: ${this.product.productName}`;
            }
            // Update the data on the form
            this.productForm.patchValue({
                productName: this.product.productName,
                productCode: this.product.productCode,
                starRating: this.product.starRating,
                description: this.product.description
            });
        }
    }
    cancelEdit() {
        // Redisplay the currently selected product
        // replacing any edits made
        this.displayProduct(this.product);
    }
    deleteProduct() {
        if (this.product && this.product.id) {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.delete.emit(this.product);
            }
        }
        else {
            // No need to delete, it was never saved
            this.clearCurrent.emit();
        }
    }
    saveProduct() {
        if (this.productForm.valid) {
            if (this.productForm.dirty) {
                // Copy over all of the original product properties
                // Then copy over the values from the form
                // This ensures values not on the form, such as the Id, are retained
                const p = Object.assign({}, this.product, this.productForm.value);
                if (p.id === 0) {
                    this.create.emit(p);
                }
                else {
                    this.update.emit(p);
                }
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
};
ProductEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductEditComponent.prototype, "errorMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductEditComponent.prototype, "selectedProduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductEditComponent.prototype, "create", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductEditComponent.prototype, "update", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductEditComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductEditComponent.prototype, "clearCurrent", void 0);
ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-product-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-edit/product-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/components/product-edit/product-edit.component.css")).default]
    })
], ProductEditComponent);



/***/ }),

/***/ "./src/app/products/components/product-list/product-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/products/components/product-list/product-list.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/products/components/product-list/product-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/product-list/product-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductListComponent = class ProductListComponent {
    constructor() {
        this.pageTitle = 'Products';
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initializeNewProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    checkChanged(value) {
        this.checked.emit(value);
    }
    newProduct() {
        this.initializeNewProduct.emit();
    }
    productSelected(product) {
        this.selected.emit(product);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductListComponent.prototype, "errorMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductListComponent.prototype, "products", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductListComponent.prototype, "displayCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductListComponent.prototype, "selectedProduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductListComponent.prototype, "checked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductListComponent.prototype, "initializeNewProduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductListComponent.prototype, "selected", void 0);
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-list/product-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/components/product-list/product-list.component.css")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/products/containers/product-shell/product-shell.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/products/containers/product-shell/product-shell.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductShellComponent", function() { return ProductShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state */ "./src/app/products/state/index.ts");
/* harmony import */ var _state_product_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../state/product.actions */ "./src/app/products/state/product.actions.ts");





let ProductShellComponent = class ProductShellComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["Load"]());
        this.products$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state__WEBPACK_IMPORTED_MODULE_3__["getProducts"]));
        this.errorMessage$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state__WEBPACK_IMPORTED_MODULE_3__["getError"]));
        this.selectedProduct$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state__WEBPACK_IMPORTED_MODULE_3__["getCurrentProduct"]));
        this.displayCode$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state__WEBPACK_IMPORTED_MODULE_3__["getShowProductCode"]));
    }
    checkChanged(value) {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleProductCode"](value));
    }
    newProduct() {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["InitializeCurrentProduct"]());
    }
    productSelected(product) {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentProduct"](product));
    }
    deleteProduct(product) {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteProduct"](product.id));
    }
    clearProduct() {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["ClearCurrentProduct"]());
    }
    saveProduct(product) {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["CreateProduct"](product));
    }
    updateProduct(product) {
        this.store.dispatch(new _state_product_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateProduct"](product));
    }
};
ProductShellComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ProductShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-shell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/containers/product-shell/product-shell.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], ProductShellComponent);



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/product-shell/product-shell.component */ "./src/app/products/containers/product-shell/product-shell.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/products/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-edit/product-edit.component */ "./src/app/products/components/product-edit/product-edit.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_product_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/product.reducer */ "./src/app/products/state/product.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _state_product_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/product.effects */ "./src/app/products/state/product.effects.ts");







/* NgRx */




const productRoutes = [
    { path: '', component: _containers_product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_4__["ProductShellComponent"] }
];
let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(productRoutes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('products', _state_product_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_product_effects__WEBPACK_IMPORTED_MODULE_10__["ProductEffects"]]),
        ],
        declarations: [
            _containers_product_shell_product_shell_component__WEBPACK_IMPORTED_MODULE_4__["ProductShellComponent"],
            _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
            _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__["ProductEditComponent"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    getProducts() {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        // Product Id must be null for the Web API to assign an Id
        const newProduct = Object.assign({}, product, { id: null });
        return this.http.post(this.productsUrl, newProduct, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('createProduct: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteProduct(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete(url, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('deleteProduct: ' + id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.put(url, product, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => console.log('updateProduct: ' + product.id)), 
        // Return the product on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ProductService);



/***/ }),

/***/ "./src/app/products/state/index.ts":
/*!*****************************************!*\
  !*** ./src/app/products/state/index.ts ***!
  \*****************************************/
/*! exports provided: getShowProductCode, getCurrentProductId, getCurrentProduct, getProducts, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowProductCode", function() { return getShowProductCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProductId", function() { return getCurrentProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProduct", function() { return getCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


// Selector functions
const getProductFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('products');
const getShowProductCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductFeatureState, state => state.showProductCode);
const getCurrentProductId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductFeatureState, state => state.currentProductId);
const getCurrentProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductFeatureState, getCurrentProductId, (state, currentProductId) => {
    if (currentProductId === 0) {
        return {
            id: 0,
            productName: '',
            productCode: 'New',
            description: '',
            starRating: 0
        };
    }
    else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
});
const getProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductFeatureState, state => state.products);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProductFeatureState, state => state.error);


/***/ }),

/***/ "./src/app/products/state/product.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/products/state/product.actions.ts ***!
  \***************************************************/
/*! exports provided: ProductActionTypes, ToggleProductCode, SetCurrentProduct, ClearCurrentProduct, InitializeCurrentProduct, Load, LoadSuccess, LoadFail, UpdateProduct, UpdateProductSuccess, UpdateProductFail, CreateProduct, CreateProductSuccess, CreateProductFail, DeleteProduct, DeleteProductSuccess, DeleteProductFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductActionTypes", function() { return ProductActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleProductCode", function() { return ToggleProductCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentProduct", function() { return SetCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCurrentProduct", function() { return ClearCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeCurrentProduct", function() { return InitializeCurrentProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProduct", function() { return UpdateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductSuccess", function() { return UpdateProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductFail", function() { return UpdateProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProduct", function() { return CreateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductSuccess", function() { return CreateProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductFail", function() { return CreateProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProduct", function() { return DeleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductSuccess", function() { return DeleteProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductFail", function() { return DeleteProductFail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductActionTypes;
(function (ProductActionTypes) {
    ProductActionTypes["ToggleProductCode"] = "[Product] Toggle Product Code";
    ProductActionTypes["SetCurrentProduct"] = "[Product] Set Current Product";
    ProductActionTypes["ClearCurrentProduct"] = "[Product] Clear Current Product";
    ProductActionTypes["InitializeCurrentProduct"] = "[Product] Initialize Current Product";
    ProductActionTypes["Load"] = "[Product] Load";
    ProductActionTypes["LoadSuccess"] = "[Product] Load Success";
    ProductActionTypes["LoadFail"] = "[Product] Load Fail";
    ProductActionTypes["UpdateProduct"] = "[Product] Update Product";
    ProductActionTypes["UpdateProductSuccess"] = "[Product] Update Product Success";
    ProductActionTypes["UpdateProductFail"] = "[Product] Update Product Fail";
    ProductActionTypes["CreateProduct"] = "[Product] Create Product";
    ProductActionTypes["CreateProductSuccess"] = "[Product] Create Product Success";
    ProductActionTypes["CreateProductFail"] = "[Product] Create Product Fail";
    ProductActionTypes["DeleteProduct"] = "[Product] Delete Product";
    ProductActionTypes["DeleteProductSuccess"] = "[Product] Delete Product Success";
    ProductActionTypes["DeleteProductFail"] = "[Product] Delete Product Fail";
})(ProductActionTypes || (ProductActionTypes = {}));
// Action Creators
class ToggleProductCode {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.ToggleProductCode;
    }
}
class SetCurrentProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.SetCurrentProduct;
    }
}
class ClearCurrentProduct {
    constructor() {
        this.type = ProductActionTypes.ClearCurrentProduct;
    }
}
class InitializeCurrentProduct {
    constructor() {
        this.type = ProductActionTypes.InitializeCurrentProduct;
    }
}
class Load {
    constructor() {
        this.type = ProductActionTypes.Load;
    }
}
class LoadSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.LoadSuccess;
    }
}
class LoadFail {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.LoadFail;
    }
}
class UpdateProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpdateProduct;
    }
}
class UpdateProductSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpdateProductSuccess;
    }
}
class UpdateProductFail {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.UpdateProductFail;
    }
}
class CreateProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.CreateProduct;
    }
}
class CreateProductSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.CreateProductSuccess;
    }
}
class CreateProductFail {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.CreateProductFail;
    }
}
class DeleteProduct {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.DeleteProduct;
    }
}
class DeleteProductSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.DeleteProductSuccess;
    }
}
class DeleteProductFail {
    constructor(payload) {
        this.payload = payload;
        this.type = ProductActionTypes.DeleteProductFail;
    }
}


/***/ }),

/***/ "./src/app/products/state/product.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/products/state/product.effects.ts ***!
  \***************************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.actions */ "./src/app/products/state/product.actions.ts");







let ProductEffects = class ProductEffects {
    constructor(productService, actions$) {
        this.productService = productService;
        this.actions$ = actions$;
        this.loadProducts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_product_actions__WEBPACK_IMPORTED_MODULE_6__["ProductActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(action => this.productService.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(products => (new _product_actions__WEBPACK_IMPORTED_MODULE_6__["LoadSuccess"](products))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _product_actions__WEBPACK_IMPORTED_MODULE_6__["LoadFail"](err))))));
        this.updateProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_product_actions__WEBPACK_IMPORTED_MODULE_6__["ProductActionTypes"].UpdateProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((product) => this.productService.updateProduct(product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(updatedProduct => (new _product_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProductSuccess"](updatedProduct))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _product_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProductFail"](err))))));
        this.createProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_product_actions__WEBPACK_IMPORTED_MODULE_6__["ProductActionTypes"].CreateProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((product) => this.productService.createProduct(product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(newProduct => (new _product_actions__WEBPACK_IMPORTED_MODULE_6__["CreateProductSuccess"](newProduct))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _product_actions__WEBPACK_IMPORTED_MODULE_6__["CreateProductFail"](err))))));
        this.deleteProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_product_actions__WEBPACK_IMPORTED_MODULE_6__["ProductActionTypes"].DeleteProduct), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((productId) => this.productService.deleteProduct(productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => (new _product_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteProductSuccess"](productId))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _product_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteProductFail"](err))))));
    }
};
ProductEffects.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], ProductEffects.prototype, "loadProducts$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], ProductEffects.prototype, "updateProduct$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], ProductEffects.prototype, "createProduct$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])()
], ProductEffects.prototype, "deleteProduct$", void 0);
ProductEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductEffects);



/***/ }),

/***/ "./src/app/products/state/product.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/products/state/product.reducer.ts ***!
  \***************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.actions */ "./src/app/products/state/product.actions.ts");


const initialState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].ToggleProductCode:
            return Object.assign({}, state, { showProductCode: action.payload });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].SetCurrentProduct:
            return Object.assign({}, state, { currentProductId: action.payload.id });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].ClearCurrentProduct:
            return Object.assign({}, state, { currentProductId: null });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].InitializeCurrentProduct:
            return Object.assign({}, state, { currentProductId: 0 });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].LoadSuccess:
            return Object.assign({}, state, { products: action.payload, error: '' });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].LoadFail:
            return Object.assign({}, state, { products: [], error: action.payload });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].UpdateProductSuccess:
            const updatedProducts = state.products.map(item => action.payload.id === item.id ? action.payload : item);
            return Object.assign({}, state, { products: updatedProducts, currentProductId: action.payload.id, error: '' });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].UpdateProductFail:
            return Object.assign({}, state, { error: action.payload });
        // After a create, the currentProduct is the new product.
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].CreateProductSuccess:
            return Object.assign({}, state, { products: [...state.products, action.payload], currentProductId: action.payload.id, error: '' });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].CreateProductFail:
            return Object.assign({}, state, { error: action.payload });
        // After a delete, the currentProduct is null.
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].DeleteProductSuccess:
            return Object.assign({}, state, { products: state.products.filter(product => product.id !== action.payload), currentProductId: null, error: '' });
        case _product_actions__WEBPACK_IMPORTED_MODULE_1__["ProductActionTypes"].DeleteProductFail:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
class GenericValidator {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    constructor(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    processMessages(container) {
        const messages = {};
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                const c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                    const childMessages = this.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
}


/***/ }),

/***/ "./src/app/shared/number.validator.ts":
/*!********************************************!*\
  !*** ./src/app/shared/number.validator.ts ***!
  \********************************************/
/*! exports provided: NumberValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidators", function() { return NumberValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NumberValidators {
    static range(min, max) {
        return (c) => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { range: true };
            }
            return null;
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=products-product-module-es2015.js.map