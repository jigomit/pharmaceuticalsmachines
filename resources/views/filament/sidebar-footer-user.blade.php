@php
    $user = filament()->auth()->user();
@endphp

@if ($user)
    <div class="kmt-sidebar-user-card">
        <div class="kmt-sidebar-user-meta">
            <div class="kmt-sidebar-user-avatar">
                {{ strtoupper(substr(filament()->getUserName($user), 0, 1)) }}
            </div>
            <div>
                <p class="kmt-sidebar-user-name">{{ filament()->getUserName($user) }}</p>
                <p class="kmt-sidebar-user-email">{{ $user->email }}</p>
            </div>
        </div>

        <form method="POST" action="{{ filament()->getLogoutUrl() }}">
            @csrf
            <button type="submit" class="kmt-sidebar-logout-btn">
                Logout
            </button>
        </form>
    </div>
@endif
