<div class="p-6 sm:px-20 bg-white border-b border-gray-200">
    <div class="flex justify-center">
        <x-jet-application-logo class="block h-12 w-auto" />
    </div>

    <div class="mt-8 text-2xl">
        {{ __('Welcome to LaraLIMS!') }}
    </div>

    <div class="mt-6 text-gray-500">
        {{ 
            __('This is a flexible and dynamic LIMS based on Laravel. 
            The Lab information is stored in a manner to be conform with actual data integrity constraints. 
            There can be added frontend components based on React for to most of user interface issues.') 
        }}
    </div>
</div>

<div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
    
    <a class="p-6 transition ease-in-out duration-300 hover:bg-blue-200 hover:text-blue-700 flex justify-center" href="{{ route('lims') . '/lifecycle' }}">
        <div class="text-3xl">{{ __('Lifecycle') }}</div>
        <x-fas-vial class="w-20 h-20" />
    </a>

    <a class="p-6 border-t border-gray-200 md:border-t-0 md:border-l transition ease-in-out duration-300 hover:bg-yellow-200 hover:text-yellow-700 flex justify-center" 
    href="{{ route('lims') . '/instruments' }}">
        <div class="text-3xl">{{ __('Instruments') }}</div>
        <x-fas-microscope class="w-20 h-20" />
    </a>

    <a class="p-6 border-t border-gray-200 transition ease-in-out duration-300 hover:bg-green-200 hover:text-green-700 flex justify-center" 
    href="{{ route('lims') . '/employees' }}">
        <div class="text-3xl">{{ __('Employees') }}</div>
        <x-fas-user-tie class="w-20 h-20" />
    </a>

    <a class="p-6 border-t border-gray-200 md:border-l transition ease-in-out duration-300 hover:bg-red-200 hover:text-red-700 flex justify-center" 
    href="{{ route('lims') . '/audittrail' }}">
        <div class="text-3xl">{{ __('Audittrail') }}</div>
        <x-fas-user-clock class="w-20 h-20" />
    </a>
</div>
