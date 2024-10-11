import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Service/Services/auth.service';
import { CommonModule } from '@angular/common';
import { TabNotificationListService } from '../../Service/Services/tab-notification-list.service';
import { TabNotificationService } from '../../Service/Services/tab-notification.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="h-full w-full">
      <nav
        class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 h-full"
      >
        <div
          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl h-full"
        >
          <a href="/" class="flex items-center">
            <!-- <img src="/src/assets/logo.svg" class="mr-3 h-6 sm:h-9" /> -->
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >Houses</span
            >
          </a>
          <div class="flex items-center lg:order-2">
            <a
              routerLink="/signin"
              [routerLinkActive]="['active']"
              *ngIf="!authService.authenticated"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              SignIn</a
            >
            <a
              routerLink="/signup"
              *ngIf="!authService.authenticated"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              SignUp</a
            >
            <a
              (click)="authService.logOut()"
              *ngIf="authService.authenticated"
              class="text-white cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              LogOut</a
            >
            <a
              routerLink="/profile"
              *ngIf="authService.authenticated"
              class="text-white cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <div
                class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
              >
                <span class="font-medium text-gray-600 dark:text-gray-300">{{
                  authService.shortNF
                }}</span>
              </div>
              Profile</a
            >
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <!-- <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  *ngIf="authService.authenticated"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >Company</a
                >
              </li>
              <li>
                <a
                  routerLink="/profile/myhouses"
                  *ngIf="authService.authenticated"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >My House</a
                >
              </li>
              <li>
                <a
                  routerLink="/profile/mycards"
                  *ngIf="authService.authenticated"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >My Cards</a
                >
              </li>
            </ul> -->
            <ul
              class="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
              role="tablist"
              data-twe-nav-ref
            >
              <li role="presentation">
                <a
                  href="/"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-zinc-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill"
                  data-twe-target="#tabs-news"
                  data-twe-nav-active
                  role="tab"
                  aria-controls="tabs-news"
                  aria-selected="true"
                  >Home</a
                >
              </li>
              
              <li role="presentation" class="z-10">
                <a
                  routerLink="/profile/myhouses"
                  *ngIf="authService.authenticated"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-zinc-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill"
                  data-twe-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false"
                  >My Houses
                </a>
              </li>
              <li role="presentation" class="z-10">
                <a
                  routerLink="/profile/mycards"
                  *ngIf="authService.authenticated"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-zinc-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill"
                  data-twe-target="#tabs-messages"
                  role="tab"
                  aria-controls="tabs-messages"
                  aria-selected="false"
                  >My Cards
                </a>
              </li>
              <li role="presentation" class="z-20">
                <a
                  href="/profile/myhouses/tab-notification"
                  *ngIf="authService.authenticated"
                  class="relative my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-zinc-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white dark:hover:bg-neutral-600 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill"
                  data-twe-target="#tabs-notifications"
                  role="tab"
                  aria-controls="tabs-notifications"
                  aria-selected="false"
                  >Notifications
                  <div *ngIf="notificationService.countNew!=0"
                    class="absolute bottom-auto left-auto right-0 top-0 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-800 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white"
                  >
                    {{notificationService.countNew}}
                  </div></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  constructor(public authService: AuthService,public notificationService:TabNotificationService) {}
  ngOnInit(): void {
    this.authService.checkLogin();
    this.notificationService.getAllOfferUsers();

  }
}
